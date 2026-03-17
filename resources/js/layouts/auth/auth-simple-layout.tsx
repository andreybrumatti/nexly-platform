import AppLogoImage from '@/components/app-logo-image';
import type { AuthLayoutProps } from '@/types';

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    return (
        <div className="grid min-h-svh lg:grid-cols-2 bg-[#0B0F1A]">
            <div className="relative hidden flex-col justify-between overflow-hidden lg:flex border-r border-slate-800/50">
                <div
                    className="absolute inset-0 z-0"
                    style={{ background: 'radial-gradient(circle at top left, #1e293b 0%, #0B0F1A 100%)' }}
                />

                <div
                    className="absolute inset-0 z-0 opacity-[0.15]"
                    style={{
                        backgroundImage: 'radial-gradient(#1d7ff0 0.5px, transparent 0.5px)',
                        backgroundSize: '32px 32px'
                    }}
                />

                <div className="relative z-10 p-12">
                    <div className="flex items-center gap-3">
                        <AppLogoImage className="w-18 h-16 rounded-md" />
                        <span className="text-2xl font-bold text-white tracking-tight text-shadow-sm">Nexly</span>
                    </div>
                </div>

                <div className="relative z-10 p-12 mb-12">
                    <h2 className="text-5xl font-extrabold leading-[1.15] text-white max-w-[500px]">
                        Preveja o futuro das suas vendas com <span className="text-[#1d7ff0]">precisão de IA.</span>
                    </h2>
                    <p className="mt-8 text-xl text-slate-400 leading-relaxed max-w-[460px]">
                        Junte-se às empresas de alto crescimento que usam a Nexly para automatizar previsões e otimizar operações de receita.
                    </p>

                    <div className="mt-16 flex items-center gap-4">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="h-10 w-10 rounded-xl border-2 border-slate-700 bg-slate-800 shadow-sm" />
                            ))}
                        </div>
                        <p className="text-sm text-slate-500 font-medium italic">
                            Confiança em sua capacidade de tomar decisões de negócios.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center p-8 lg:p-12 bg-[#0B0F1A]">
                <div className="w-full max-w-[400px]">
                    <div className="lg:hidden flex justify-center mb-10">
                        <div className="bg-[#1d7ff0] p-2 rounded-xl shadow-lg shadow-blue-500/20">
                            <AppLogoImage className="w-8 h-8 brightness-0 invert" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 mb-10 text-center lg:text-left">
                        <h1 className="text-3xl font-bold tracking-tight text-white">{title}</h1>
                        <p className="text-slate-400">{description}</p>
                    </div>

                    <div className="auth-form-container">
                        {children}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-[11px] text-slate-600 leading-relaxed uppercase tracking-widest font-semibold">
                            © 2026 Nexly AI Inc. Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
