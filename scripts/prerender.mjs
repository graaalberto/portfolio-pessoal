import { readFile, rmdir, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';

const outputDirectory = path.resolve('dist');
const htmlPath = path.join(outputDirectory, 'index.html');
const manifestPath = path.join(outputDirectory, '.vite', 'manifest.json');
const server = await createServer({
  configFile: path.resolve('vite.config.ts'),
  mode: 'standalone',
  appType: 'custom',
  server: { middlewareMode: true },
  logLevel: 'error',
});

try {
  const { default: App } = await server.ssrLoadModule('/src/App.tsx');
  const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
  let markup = renderToString(createElement(App)).replaceAll('="/assets/', '="./assets/');

  for (const [source, asset] of Object.entries(manifest)) {
    if (asset.file && /\.(?:avif|gif|jpe?g|png|svg|webp)$/i.test(asset.file)) {
      markup = markup.replaceAll(`/${source}`, `./${asset.file}`);
    }
  }

  const html = await readFile(htmlPath, 'utf8');
  const rootPlaceholder = '<div id="root"></div>';

  if (!html.includes(rootPlaceholder)) {
    throw new Error(`Could not find the application root in ${htmlPath}.`);
  }

  await writeFile(htmlPath, html.replace(rootPlaceholder, `<div id="root">${markup}</div>`));
  await unlink(manifestPath);
  await rmdir(path.dirname(manifestPath));
} finally {
  await server.close();
}
