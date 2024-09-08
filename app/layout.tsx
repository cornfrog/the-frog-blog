import type { Metadata } from "next";
import "./globals.scss";
import Topbar from "./components/Topbar";

export const metadata: Metadata = {
  title: "The Frog Blog",
  description: "A blog by cornfrog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body> 
        <Topbar />
        {children}
      </body>
    </html>
  );
}
