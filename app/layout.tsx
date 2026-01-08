import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "RAI - Roblox Account Informer",
    description: "Roblox hesap bilgilerinizi yönetin ve OAuth2 ile güvenli giriş yapın",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="tr">
            <body className="dark">{children}</body>
        </html>
    );
}
