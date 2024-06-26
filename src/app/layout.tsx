import "src/styles/app.scss";

import { Inter, Rubik, Playfair } from "next/font/google";

import type { ReactNode } from "react";
import Script from "next/script";
import { ClientWrapper } from "@src/components/common/ClientWrapper";
import { TRPCProvider } from "@src/trpc/TRPC.provider";
import {publicEnv} from "@/env/public.env";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-thin",
});

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-default",
});

const playFair = Playfair({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-styled",
});

export const metadata = {
  title: publicEnv.APP_NAME,
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playFair.variable} ${rubik.variable}`}>
      <body suppressHydrationWarning className={"m-0 p-0 font-default"}>
        <Script id={"theme-support"} strategy={"beforeInteractive"}>
          {`
            function handleColorSchemeChange(event) {
              const prefersDarkMode = event.matches;
        
              if (prefersDarkMode) {
                document.body.classList.add("dark");
              } else {
                document.body.classList.remove("dark");
              }
            }

            const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
            colorSchemeQuery.addEventListener("change", handleColorSchemeChange);
            handleColorSchemeChange(colorSchemeQuery);
        `}
        </Script>
        <ClientWrapper>
          <TRPCProvider>{children}</TRPCProvider>
        </ClientWrapper>
      </body>
    </html>
  );
}
