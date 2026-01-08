'use client';

import { Download, Github, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Beams from "@/components/Beams";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
    const [copied, setCopied] = useState(false);
    const oauthUrl = "https://rai-verify.vercel.app/oauth/callback";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(oauthUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <main className="relative min-h-screen w-full overflow-hidden">
            {/* Background Beams */}
            <div className="absolute inset-0 z-0">
                <Beams
                    beamWidth={2}
                    beamHeight={15}
                    beamNumber={12}
                    lightColor="#ffffff"
                    speed={2}
                    noiseIntensity={1.75}
                    scale={0.2}
                    rotation={0}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-8">
                <div className="w-full max-w-2xl space-y-8">
                    {/* Header */}
                    <div className="text-center space-y-4">
                        <h1 className="text-5xl font-bold tracking-tight text-white">
                            RAI
                        </h1>
                        <p className="text-xl text-gray-300">
                            Roblox Account Informer
                        </p>
                        <p className="text-sm text-gray-400">
                            Roblox hesap bilgilerinizi yönetin ve OAuth2 ile güvenli giriş yapın
                        </p>
                    </div>

                    {/* Main Card */}
                    <Card className="bg-black/50 backdrop-blur-sm border-white/10">
                        <CardHeader>
                            <CardTitle className="text-white">Uygulamayı İndirin</CardTitle>
                            <CardDescription className="text-gray-400">
                                Windows için RAI uygulamasını indirin ve hesabınızı yönetmeye başlayın
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Button
                                className="w-full"
                                size="lg"
                                asChild
                            >
                                <a href="https://github.com/Beratkan15/RAI-Roblox-Account-Informer/releases/latest/download/RAI.exe">
                                    <Download className="mr-2 h-5 w-5" />
                                    RAI İndir (Windows)
                                </a>
                            </Button>

                            <Button
                                variant="outline"
                                className="w-full bg-black/30 border-white/20 text-white hover:bg-white/10"
                                size="lg"
                                asChild
                            >
                                <a href="https://github.com/Beratkan15/RAI-Roblox-Account-Informer" target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-5 w-5" />
                                    GitHub'da Görüntüle
                                </a>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Footer Links */}
                    <div className="flex justify-center gap-6 text-sm text-gray-400">
                        <Link href="/tos" className="hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="/pp" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/credits" className="hover:text-white transition-colors">
                            Credits
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
