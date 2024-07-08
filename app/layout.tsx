import { Poppins } from "next/font/google";
import "../styles/globals.css";
import { SideBar } from "@/components/nav/SideBar";
import { Heading } from "@/components/nav/Heading";

const poppins = Poppins({ weight: ["100", "200", "400", "700", "900"], subsets: ['latin'] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={poppins.className}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body id="root" className="grid grid-cols-root-layout">
        <SideBar />
        <main>
          <Heading />
          {children}
        </main>
      </body>
    </html>
  );
}
