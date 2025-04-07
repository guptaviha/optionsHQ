import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { PWAWrapper } from "@/components/pwa-wrapper";
import Script from "next/script";
import { NavBar } from "@/components/nav-bar";

const inter = Inter({ subsets: ["latin"] });

/**
 * Exporting this metadata object is enough for Next.JS to pick it up for the page and SEO.
 */
export const metadata: Metadata = {
    title: "optionsHQ",
    description: "An app to view ayour options trading data",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Script async src="https://analystics.karanrajpal.net/script.js" data-website-id="36e23ca2-95a7-49fe-986a-5fbce6bc4b76"></Script>
            <body className={inter.className}>
                <PWAWrapper>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <NavBar />
                        {/* children = root page.tsx */}
                        {children}
                    </ThemeProvider>
                </PWAWrapper>
            </body>
        </html>
    );
}
