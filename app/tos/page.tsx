'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Beams from "@/components/Beams";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
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
                            <CardTitle className="text-white text-3xl">Terms of Service</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-gray-300">
                            <section>
                                <h2 className="text-xl font-semibold text-white mb-2">1. Kabul Edilen Şartlar</h2>
                                <p className="text-sm">
                                    RAI (Roblox Account Informer) uygulamasını kullanarak, bu hizmet şartlarını kabul etmiş olursunuz.
                                    Bu şartları kabul etmiyorsanız, lütfen uygulamayı kullanmayın.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-white mb-2">2. Hizmet Açıklaması</h2>
                                <p className="text-sm">
                                    RAI, Roblox hesap bilgilerinizi görüntülemenizi ve yönetmenizi sağlayan ücretsiz bir masaüstü uygulamasıdır.
                                    Uygulama, Roblox'un resmi API'lerini kullanarak çalışır ve Roblox ile resmi bir bağlantısı yoktur.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-white mb-2">3. Kullanıcı Sorumlulukları</h2>
                                <ul className="list-disc list-inside text-sm space-y-1">
                                    <li>Hesap bilgilerinizi güvende tutmak sizin sorumluluğunuzdadır</li>
                                    <li>Cookie bilgilerinizi kimseyle paylaşmamalısınız</li>
                                    <li>Uygulamayı yasalara uygun şekilde kullanmalısınız</li>
                                    <li>Roblox'un kullanım şartlarına uymalısınız</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-white mb-2">4. Gizlilik ve Güvenlik</h2>
                                <p className="text-sm">
                                    Tüm kimlik bilgileriniz yerel olarak şifrelenerek saklanır. Hiçbir veri harici sunuculara gönderilmez.
                                    Daha fazla bilgi için <Link href="/pp" className="text-blue-400 hover:underline">Gizlilik Politikası</Link>'nı inceleyin.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-white mb-2">5. Sorumluluk Reddi</h2>
                                <p className="text-sm">
                                    RAI "olduğu gibi" sunulmaktadır. Uygulama geliştiricileri, uygulamanın kullanımından kaynaklanan
                                    herhangi bir kayıp veya zarardan sorumlu değildir. Hesap güvenliğiniz tamamen sizin sorumluluğunuzdadır.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-semibold text-white mb-2">6. Değişiklikler</h2>
                                <p className="text-sm">
                                    Bu şartlar önceden haber verilmeksizin güncellenebilir. Uygulamayı kullanmaya devam ederek,
                                    güncel şartları kabul etmiş olursunuz.
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
