import Container from '../ui/Container';

export default function PageLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <Container>{children}</Container>;
}
