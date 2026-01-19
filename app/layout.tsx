import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["400", "600", "700", "800"],
    variable: "--font-body",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Portfolio v2",
    description: "Interactieve portfolio showcase",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="nl">
            <body className={manrope.variable}>{children}</body>
        </html>
    );
}

