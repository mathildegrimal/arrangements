import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Header from '@/app/ui/header/Header';
import Footer from './ui/footer/Footer';
import { Analytics } from '@vercel/analytics/next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <div className="mt-32">{children}</div>
        <Footer />
        <Analytics mode="production" />
      </body>
    </html>
  );
}
