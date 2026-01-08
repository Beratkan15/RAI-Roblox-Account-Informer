'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Beams from "@/components/Beams";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
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
                <div className="w-full max-w-3xl space-y-6">
                    <Button variant="ghost" className="text-white hover:bg-white/10" asChild>
                        <Link href="/">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Ana Sayfaya Dön
                        </Link>
                    </Button>

                    <Card className="bg-black/50 backdrop-blur-sm border-white/10">
                        <CardHeader>
                            <CardTitle className="text-white text-3xl">Privacy Policy</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-gray-300">
                            <section>
                                <h2 className="text-xl font-semibold text-white mb-2">1. Toplanan Bilgiler</h2>
                                <p className="text-sm mb-2">
                                    RAI uygulaması aşağıdaki bilgileri toplar ve işler:
                                </p>
                                <ul className="list-disc list-inside text-sm space-y-1">
                                    <li>Roblox hesap cookie'si (.ROBLOSECURITY)</li>
                                    <li>OAuth2 access ve refresh token'ları</li>
                                    <li>Roblox API'lerinden alınan hesap bilgileri (kullanıcı adı, avatar, Robux, vb.)</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-white mb-2">2. Veri Saklama</h2>
                                <p className="text-sm">
                                    Tüm hassas veriler (cookie, token'lar) Windows Data Protection API (DPAPI) kullanılarak
                                    şifrelenir ve yalnızca yerel bilgisayarınızda saklanır. Hiçbir veri harici sunuculara
                                    gönderilmez veya üçüncü taraflarla paylaşılmaz.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-white mb-2">3. Veri Kullanımı</h2>
                                <p className="text-sm mb-2">
                                    Toplanan veriler yalnızca şu amaçlarla kullanılır:
                                </p>
                                <ul className="list-disc list-inside text-sm space-y-1">
                                    <li>Roblox hesap bilgilerinizi görüntüleme</li>
                                    <li>Robux işlem geçmişinizi gösterme</li>
                                    <li>OAuth2 kimlik doğrulama işlemleri</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-white mb-2">4. Üçüncü Taraf Hizmetler</h2>
                                <p className="text-sm">
                                    RAI, Roblox'un resmi API'lerini kullanır. Bu API'lere yapılan istekler Roblox'un
                                    gizlilik politikasına tabidir. RAI, Roblox ile resmi bir bağlantısı olmayan
                                    bağımsız bir uygulamadır.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-white mb-2">5. Veri Güvenliği</h2>
                                <p className="text-sm">
                                    Verilerinizin güvenliğini sağlamak için:
                                </p>
                                <ul className="list-disc list-inside text-sm space-y-1">
                                    <li>Tüm hassas veriler şifrelenir</li>
                                    <li>Veriler yalnızca yerel olarak saklanır</li>
                                    <li>OAuth2 PKCE (Proof Key for Code Exchange) kullanılır</li>
                                    <li>HTTPS üzerinden güvenli API çağrıları yapılır</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-white mb-2">6. Kullanıcı Hakları</h2>
                                <p className="text-sm">
                                    Verilerinizi istediğiniz zaman silebilirsiniz. Uygulamadan çıkış yaparak veya
                                    uygulamayı kaldırarak tüm yerel verileri temizleyebilirsiniz.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-white mb-2">7. İletişim</h2>
                                <p className="text-sm">
                                    Gizlilik politikası hakkında sorularınız varsa, GitHub üzerinden iletişime geçebilirsiniz:
                                    <a href="https://github.com/Beratkan15" className="text-blue-400 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                                        @Beratkan15
                                    </a>
                                </p>
                            </section>

                            <p className="text-xs text-gray-500 mt-6">
                                Son güncelleme: 8 Ocak 2026
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    );
}
