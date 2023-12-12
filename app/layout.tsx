import './ui/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className='overflow-x-hidden'>
      <body>{children}</body>
    </html>
  );
}
