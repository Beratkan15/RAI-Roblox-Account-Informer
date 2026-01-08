'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Beams from "@/components/Beams";
import { CheckCircle2, Copy, XCircle } from "lucide-react";

export default function OAuthCallback() {
    const searchParams = useSearchParams();
    const [copied, setCopied] = useState(false);
    const [fullUrl, setFullUrl] = useState('');

    useEffect(() => {
        // Get the full callback URL
        const url = window.location.href;
        setFullUrl(url);
    }, []);

    const code = searchParams.get('code');
    const state = searchParams.get('state');
    const error = searchParams.get('error');

    const copyToClipboard = () => {
        navigator.clipboard.writeText(fullUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <main className="relative min-h-screen w-full overflow-hidden">
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

            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-8">
                <div className="w-full max-w-2xl space-y-6">
                    <Card className="bg-black/50 backdrop-blur-sm border-white/10">
                        <CardHeader>
                            <CardTitle className="text-white text-2xl flex items-center gap-2">
                                {error ? (
                                    <>
                                        <XCircle className="h-6 w-6 text-red-400" />
                                        OAuth2 Hatası
                                    </>
                                ) : (
                                    <>
                                        <CheckCircle2 className="h-6 w-6 text-green-400" />
                                        OAuth2 Callback
                                    </>
                                )}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {error ? (
                                <div className="space-y-3">
                                    <p className="text-red-400">
                                        Bir hata oluştu: {error}
                                    </p>
                                    <p className="text-sm text-gray-400">
                                        Lütfen uygulamayı tekrar deneyin.
                                    </p>
                                </div>
                            ) : code ? (
                                <div className="space-y-4">
                                    <p className="text-green-400">
                                        ✓ Yetkilendirme başarılı!
                                    </p>
                                    <p className="text-sm text-gray-300">
                                        Aşağıdaki URL'yi kopyalayın ve RAI uygulamasına yapıştırın:
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <code className="flex-1 rounded bg-black/50 px-3 py-2 text-xs text-gray-300 border border-white/10 break-all">
                                            {fullUrl}
                                        </code>
                                        <Button
                                            size="icon"
                                            variant="outline"
                                            className="bg-black/30 border-white/20 text-white hover:bg-white/10 shrink-0"
                                            onClick={copyToClipboard}
                                        >
                                            {copied ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                        </Button>
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        Bu pencereyi kapatabilirsiniz.
                                    </p>
                                </div>
                            ) : (
                                <p className="text-gray-400">
                                    Callback parametreleri bekleniyor...
                                </p>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    );
}
