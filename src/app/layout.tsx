import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/context/theme-provider';
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pranav',
  description: 'The creative portfolio of a developer and artist.',
  icons: {
    icon: 'https://i.ibb.co/23D8qjzR/Whats-App-Image-2025-11-15-at-22-25-33-c37a1d47.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head />
      <body className="font-body antialiased">
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            themes={['light-slate', 'dark-slate', 'light-green', 'dark-green', 'light-zinc', 'dark-zinc']}
        >
            {children}
            <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
