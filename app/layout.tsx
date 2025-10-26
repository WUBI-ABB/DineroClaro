export const metadata = {
  title: "DineroClaro",
  description: "Gestor inteligente de flujo de dinero con IVA, ISR y MSI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body style={{ fontFamily: "Arial, sans-serif", background: "#f5f5f5", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
