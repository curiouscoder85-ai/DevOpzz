import type {Metadata} from 'next';
import './globals.css';
import { EnvironmentProvider } from '@/context/environment-context';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'ergle_eye',
  description: 'The creative portfolio of a developer and artist.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <EnvironmentProvider>
          {children}
          <Toaster />
        </EnvironmentProvider>
      </body>
    </html>
  );
}
