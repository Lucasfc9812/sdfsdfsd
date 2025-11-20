import './globals.css'

export const metadata = {
    title: 'Acesso Exclusivo - Kamyla',
    description: 'Conteúdo exclusivo',
}

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
                {/* Reference the external CSS file in public/assets */}
                <link rel="stylesheet" href="/assets/style.css" />
            </head>
            <body>{children}</body>
        </html>
    )
}
