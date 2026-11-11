import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Linkedin,
  Github,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  Clock
} from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2200);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/75884baa121497eeaebe9ccab06badf6', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          _subject: formData.subject,
          message: formData.message,
          _template: 'table'
        })
      });

      const result: { success?: boolean | string } = await response.json();
      if (!response.ok || (result.success !== true && result.success !== 'true')) {
        throw new Error('O serviço não aceitou a mensagem.');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Falha ao enviar mensagem de contacto:', error);
      setSubmitError('Não foi possível enviar a mensagem. Verifique a sua ligação e tente novamente.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-500 dark:text-neutral-400 mb-2">
            <span>06</span>
            <span aria-hidden="true">/</span>
            <span>Comunicação & Oportunidades</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-950 dark:text-white uppercase">
            Contacto & Parcerias Industriais
          </h2>
          <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Aberto para novas oportunidades profissionais, consultorias de manutenção eletromecânica e projetos de digitalização industrial.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Channels Column */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-4 pb-2 border-b border-neutral-200 dark:border-neutral-800">
              Canais Diretos de Comunicação
            </h3>

            {/* Email Card */}
            <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#111215] flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-neutral-500 dark:text-neutral-400 block">
                    Correio Eletrónico
                  </span>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-xs sm:text-sm font-bold text-neutral-950 dark:text-white hover:underline break-all"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(CONTACT_INFO.email, 'email')}
                aria-label="Copiar email"
                className="p-2 rounded-md text-neutral-500 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors shrink-0 ml-2 cursor-pointer"
              >
                {copiedType === 'email' ? (
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* WhatsApp Card */}
            <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#111215] flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-neutral-500 dark:text-neutral-400 block">
                    WhatsApp Direto
                  </span>
                  <a
                    href={CONTACT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-bold text-neutral-950 dark:text-white hover:underline"
                  >
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shrink-0 ml-2"
              >
                <span>Abrir</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#111215] flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-neutral-500 dark:text-neutral-400 block">
                    Chamada Telefónica
                  </span>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="text-xs sm:text-sm font-bold text-neutral-950 dark:text-white hover:underline font-mono"
                  >
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(CONTACT_INFO.phoneDisplay, 'phone')}
                aria-label="Copiar telefone"
                className="p-2 rounded-md text-neutral-500 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors shrink-0 ml-2 cursor-pointer"
              >
                {copiedType === 'phone' ? (
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location & Timezone info */}
            <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#111215]">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>LOCALIZAÇÃO BASE</span>
              </div>
              <p className="text-sm font-bold text-neutral-950 dark:text-white">
                Luanda, Angola (GMT+1 / WAT)
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                Disponível para trabalho em regime de turno, deslocações técnicas a instalações fabris e reuniões técnicas.
              </p>
            </div>

            {/* Social & Profiles */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 text-xs font-bold uppercase tracking-wider rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#111215] text-neutral-900 dark:text-white hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </a>

              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 text-xs font-bold uppercase tracking-wider rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#111215] text-neutral-900 dark:text-white hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </a>
            </div>
          </div>

          {/* Interactive Message Form */}
          <div className="lg:col-span-7">
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-4 pb-2 border-b border-neutral-200 dark:border-neutral-800">
              Enviar Mensagem Direta
            </h3>

            <div className="p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#111215]">
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-black uppercase text-neutral-950 dark:text-white">
                    Mensagem Enviada com Sucesso
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 max-w-sm mx-auto">
                    O serviço de envio aceitou a mensagem. Na primeira utilização, confirme o e-mail de ativação enviado para a caixa de correio do destinatário para começar a receber contactos.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1.5">
                        O Seu Nome
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Manuel Silva"
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0c0d0e] text-neutral-900 dark:text-white text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1.5">
                        O Seu E-mail
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nome@empresa.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0c0d0e] text-neutral-900 dark:text-white text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1.5">
                      Assunto / Área de Interesse
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Ex: Oportunidade Técnica / Automação / Manutenção"
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0c0d0e] text-neutral-900 dark:text-white text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1.5">
                      Mensagem
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Descreva o projeto, necessidade operacional ou detalhes da vaga..."
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0c0d0e] text-neutral-900 dark:text-white text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white transition-all"
                    ></textarea>
                  </div>

                    {submitError && (
                      <p role="alert" className="text-xs text-red-600 dark:text-red-400">
                        {submitError}
                      </p>
                    )}

                    <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold tracking-wider uppercase bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all cursor-pointer disabled:opacity-50 shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{submitting ? 'A Enviar...' : 'Enviar Mensagem'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
