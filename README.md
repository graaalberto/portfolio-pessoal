

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Production build and search indexing

Generate the standalone build, including pre-rendered page content for search crawlers:

`npm run build:standalone`

The standalone output is written to `dist`. To test it locally, run `npm run preview` and open the URL printed by Vite (by default, `http://localhost:4173`). Deploy the complete `dist` folder to GitHub Pages, including `robots.txt`, `sitemap.xml`, `favicon.svg`, and `assets`.

The canonical URL, social metadata, structured data, and sitemap target `https://graaalberto.github.io/`. If the public site URL changes, update those URLs in `index.html`, `public/robots.txt`, and `public/sitemap.xml`.

After deployment, submit `https://graaalberto.github.io/sitemap.xml` in Google Search Console and Bing Webmaster Tools. Indexing and ranking are controlled by the search engines and cannot be guaranteed by build configuration alone.
