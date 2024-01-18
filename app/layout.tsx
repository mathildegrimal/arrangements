import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Header from './ui/header/Header';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
