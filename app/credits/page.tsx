'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Beams from "@/components/Beams";
import Link from "next/link";
import { ArrowLeft, Github, Heart } from "lucide-react";

export default function Credits() {
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
                    <Button variant="ghost" className="text-white hover:bg-white/10" asChild>
                        <Link href="/">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Ana Sayfaya Dön
                        </Link>
                    </Button>

                    <Card className="bg-black/50 backdrop-blur-sm border-white/10">
                        <CardHeader>
                            <CardTitle className="text-white text-3xl">Credits</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6 text-gray-300">
                            <section className="text-center space-y-4">
                                <div className="flex justify-center">
                                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/10">
                                        <img
                                            src="/developer.png"
                                            alt="Beratkan15"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold text-white">Beratkan15</h2>
                                    <p className="text-sm text-gray-400">Developer & Creator</p>
                                </div>

                                <p className="text-sm">
                                    RAI (Roblox Account Informer) uygulamasının geliştiricisi
                                </p>

                                <div className="flex justify-center gap-4">
                                    <Button variant="outline" className="bg-black/30 border-white/20 text-white hover:bg-white/10" asChild>
                                        <a href="https://github.com/Beratkan15" target="_blank" rel="noopener noreferrer">
                                            <Github className="mr-2 h-4 w-4" />
                                            GitHub
                                        </a>
                                    </Button>
                                </div>
                            </section>

                            <hr className="border-white/10" />

                            <section className="space-y-3">
                                <h3 className="text-lg font-semibold text-white">Kullanılan Teknolojiler</h3>
                                <ul className="text-sm space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400">•</span>
                                        <span><strong className="text-white">.NET 8.0 & WPF:</strong> Masaüstü uygulama framework'ü</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400">•</span>
                                        <span><strong className="text-white">WPF UI:</strong> Modern Fluent Design UI kütüphanesi</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400">•</span>
                                        <span><strong className="text-white">Next.js:</strong> Web sitesi framework'ü</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400">•</span>
                                        <span><strong className="text-white">Shadcn UI:</strong> UI component kütüphanesi</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400">•</span>
                                        <span><strong className="text-white">Three.js:</strong> 3D grafik ve animasyonlar</span>
                                    </li>
                                </ul>
                            </section>

                            <hr className="border-white/10" />

                            <section className="space-y-3">
                                <h3 className="text-lg font-semibold text-white">Özel Teşekkürler</h3>
                                <ul className="text-sm space-y-2">
                                    <li className="flex items-start gap-2">
                                        <Heart className="h-4 w-4 text-red-400 mt-0.5" />
                                        <span>Roblox API'lerini kullanıma açan Roblox ekibine</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Heart className="h-4 w-4 text-red-400 mt-0.5" />
                                        <span>WPF UI kütüphanesini geliştiren lepoco'ya</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Heart className="h-4 w-4 text-red-400 mt-0.5" />
                                        <span>Beams background efektini oluşturan ReactBits ekibine</span>
                                    </li>
                                </ul>
                            </section>

                            <div className="text-center pt-4">
                                <p className="text-xs text-gray-500">
                                    Made with <Heart className="inline h-3 w-3 text-red-400" /> by Beratkan15
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                    © 2026 RAI - Roblox Account Informer
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    );
}
