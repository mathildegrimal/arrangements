import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Header from '@/app/ui/header/Header';
import FooterProvider from './provider';
import Footer from './ui/footer/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <FooterProvider>
          <Header />
          {children}
          <Footer />
        </FooterProvider>
      </body>
    </html>
  );
}
