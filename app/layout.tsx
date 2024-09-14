import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.scss";

const outfit = Outfit({ subsets: ["latin"] });

export const viewport = {
    width: "device-width",
    initialScale: 1
};

export const metadata: Metadata = {
    title: "Frontend Mentor | NFT preview card component",
    description: "A project from the Frontend Mentor Platform"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`fs-base fw-300   ${outfit.className}`}>
                {children}
            </body>
        </html>
    );
}
