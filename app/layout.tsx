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
          <div className="mt-24 bg-blue-500">{children}</div>
          <Footer />
        </FooterProvider>
      </body>
    </html>
  );
}
