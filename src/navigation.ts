import { getPermalink } from './utils/permalinks';

const WHATSAPP_NUMBER = '34618324653';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const headerData = {
  links: [
    {
      text: 'Servicios',
      href: getPermalink('/#servicios'),
    },
    {
      text: 'Precios',
      href: getPermalink('/#precios'),
    },
    {
      text: 'Sobre mí',
      href: getPermalink('/about'),
    },
    {
      text: 'Contacto',
      href: getPermalink('/contact'),
    },
  ],
  actions: [
    {
      text: 'Hablar por WhatsApp',
      href: WHATSAPP_LINK,
      target: '_blank',
      icon: 'tabler:brand-whatsapp',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Servicios',
      links: [
        { text: 'Chatbot WhatsApp 24/7', href: getPermalink('/#precios') },
        { text: 'Automatización de procesos', href: getPermalink('/#precios') },
        { text: 'Webs rápidas', href: getPermalink('/#precios') },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { text: 'Sobre mí', href: getPermalink('/about') },
        { text: 'Contacto', href: getPermalink('/contact') },
        { text: 'Preguntas frecuentes', href: getPermalink('/#faqs') },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { text: 'juanpedro@automatizamurcia.com', href: 'mailto:juanpedro@automatizamurcia.com' },
        { text: 'WhatsApp', href: WHATSAPP_LINK },
        { text: 'Alhama de Murcia, España', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Aviso legal', href: getPermalink('/terms') },
    { text: 'Política de privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/in/juanpedrogarciavalera' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:juanpedro@automatizamurcia.com' },
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: WHATSAPP_LINK },
  ],
  footNote: `
    Automatiza Murcia · Juan Pedro García Valera · <a class="text-blue-600 underline dark:text-muted" href="https://automatizamurcia.com">automatizamurcia.com</a> · Todos los derechos reservados.
  `,
};
