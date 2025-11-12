import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "ToyMagic - Scan Toys, Unlock Fun",
  description:"ToyMagic is an innovative app that lets kids scan their toys to unlock exciting digital adventures, games, and stories. Transform playtime with interactive experiences that bring toys to life!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}