// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const ua = request.headers.get('user-agent') || '';

  // Lista de bots do Meta
  const metaBots = [
    'facebookexternalhit',
    'Facebot',
    'Instagram',
    'WhatsApp',
    'WhatsAppBot',
    'Meta',
  ];

  // Se o user-agent for de bot → redireciona para BibliaOnline
  if (metaBots.some(bot => ua.toLowerCase().includes(bot.toLowerCase()))) {
    return NextResponse.redirect('https://www.bibliaonline.com.br/');
  }

  // Caso contrário → usuário normal → continua para o site
  return NextResponse.next();
}

// Aplica o middleware em todas as rotas
export const config = {
  matcher: '/:path*',
};
