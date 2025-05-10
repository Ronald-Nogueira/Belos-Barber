// src/app/layout.js
export const metadata = {
  title: "Belos Barber",
  description: "Agendamento de horários",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
