export const metadata = {
  title: "DineroClaro",
  description: "Gestor inteligente de flujo de dinero con IVA, ISR y MSI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head />
      <body style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
