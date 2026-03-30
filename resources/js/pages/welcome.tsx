import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';
import { Button } from '@/components/ui/button';
import {
    BarChart3,
    Database,
    Lightbulb,
    RefreshCw,
} from 'lucide-react';
import AppLogoImage from '@/components/app-logo-image';
import FeatureCard from '@/components/pages/welcome/FeatureCard';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage().props;

    return (
        <div className="flex min-h-screen flex-col bg-[#0B0F1A] text-slate-200 selection:bg-[#1d7ff0] selection:text-white scroll-smooth">
            <Head title="Nexly - Preveja o crescimento do seu negócio" />

            <nav className="sticky top-0 z-50 flex items-center justify-between bg-[#0B0F1A]/80 px-6 py-4 backdrop-blur-md lg:px-12 border-b border-slate-800/50">
                <div className="flex items-center">
                        <div className="flex items-center justify-center">
                            <AppLogoImage className="w-60 h-35 rounded-md"/>
                        </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="hidden items-center gap-8 text-sm font-medium text-slate-400 md:flex">
                        <a href="#funcionalidades" className="hover:text-[#1d7ff0] transition-colors">Funcionalidades</a>
                        <a href="#sobre" className="hover:text-[#1d7ff0] transition-colors">Sobre</a>
                    </div>

                    <div className="flex items-center gap-3">
                        {auth.user ? (
                            <Link href={dashboard()}>
                                <Button className="bg-[#1d7ff0] hover:bg-blue-600 rounded-md px-6 font-bold shadow-lg shadow-blue-500/20 cursor-pointer">
                                    Dashboard
                                </Button>
                            </Link>
                        ) : (
                            <>
                                <Link href={login()} className="text-sm mr-4 font-bold text-slate-300 hover:text-[#1d7ff0] transition-colors">
                                    Entrar
                                </Link>
                                {canRegister && (
                                    <Link href={register()}>
                                        <Button className="rounded-md bg-[#1d7ff0] px-6 font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 cursor-pointer">
                                            Criar conta
                                        </Button>
                                    </Link>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </nav>

            <section id="sobre" className="scroll-mt-24 relative flex flex-col items-center px-6 pt-20 pb-24 lg:flex-row lg:px-24 max-w-7xl mx-auto w-full">
                <div className="z-10 flex-1 text-center lg:text-left">
                    <div className="mb-6 inline-block rounded-full bg-blue-500/10 px-4 py-1 text-xs font-bold text-[#1d7ff0] uppercase tracking-wider border border-blue-500/20">
                        Aberto para empreendedores
                    </div>
                    <h1 className="max-w-2xl text-5xl font-extrabold leading-[1.1] tracking-tight text-white lg:text-7xl">
                        Preveja o crescimento do seu negócio com <span className="text-[#1d7ff0]">precisão de IA</span>
                    </h1>
                    <p className="mt-8 max-w-lg text-lg text-slate-400 leading-relaxed">
                        Capacitando pequenos empreendedores com previsões de vendas baseadas em IA e insights de negócios fáceis de entender. Transforme seus dados brutos em um roteiro para o sucesso.
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
                        <Link href={register()}>
                            <Button className="h-14 rounded-xl bg-[#1d7ff0] px-10 text-lg font-bold shadow-xl shadow-blue-500/20 hover:bg-blue-600 hover:-translate-y-0.5 transition-all duration-400 cursor-pointer">
                                Começar agora
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="relative mt-16 flex-1 lg:mt-0 w-full lg:ml-12">
                    <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-3 shadow-2xl backdrop-blur-sm">
                        <div className="aspect-[16/10] w-full rounded-xl bg-[#0B0F1A] border border-slate-800 flex items-center justify-center overflow-hidden">
                             <span className="text-slate-700 font-medium italic">Preview do Dashboard (Screenshot)</span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="funcionalidades" className="scroll-mt-24 bg-[#0D121F] py-24 px-6 lg:px-24 border-y border-slate-800/50">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="mb-16">
                        <span className="text-sm font-bold uppercase tracking-wider text-[#1d7ff0]">Recursos Avançados</span>
                        <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white lg:text-5xl">Funcionalidades poderosas para um crescimento inteligente</h2>
                        <p className="mt-4 max-w-2xl text-lg text-slate-400">
                            A Nexly combina aprendizado de máquina de ponta com uma interface minimalista projetada especificamente para as necessidades de empresas em crescimento.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <FeatureCard
                            icon={<BarChart3 className="h-6 w-6" />}
                            title="Previsões com IA"
                            desc="Entenda o futuro das suas vendas com nossos modelos de previsão proprietários treinados em tendências de mercado."
                        />
                        <FeatureCard
                            icon={<Database className="h-6 w-6" />}
                            title="Gestão de Dados"
                            desc="Suporte completo para arquivos CSV e Excel (xlsx). Ferramentas intuitivas para gerir seu histórico de vendas."
                        />
                        <FeatureCard
                            icon={<Lightbulb className="h-6 w-6" />}
                            title="Insights de Negócios"
                            desc="Obtenha insights legíveis gerados por IA para tomar decisões estratégicas informadas sobre o seu negócio."
                        />
                        <FeatureCard
                            icon={<RefreshCw className="h-6 w-6" />}
                            title="Sincronização"
                            desc="Mantenha-se atualizado com a sincronização via WebSockets, garantindo que sua equipe esteja sempre alinhada."
                        />
                    </div>
                </div>
            </section>

            <section className="px-6 py-24 lg:px-24 max-w-7xl mx-auto w-full">
                <div className="flex flex-col items-center justify-center rounded-[3rem] bg-gradient-to-b from-[#1d7ff0] to-blue-700 py-20 px-8 text-center text-white shadow-2xl">
                    <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Pronto para ver o futuro do seu negócio?</h2>
                    <p className="mt-6 max-w-xl text-lg text-blue-100">
                        Junte-se aos empreendedores que usam a Nexly para escalar com confiança baseada em dados. Comece hoje gratuitamente.
                    </p>
                    <Link href={register()} className="mt-10">
                        <Button className="h-16 rounded-xl bg-white text-[#1d7ff0] px-12 text-xl font-bold hover:bg-slate-100 transition-all shadow-xl cursor-pointer">
                            Começar Agora Gratuitamente
                        </Button>
                    </Link>
                </div>
            </section>

            <footer className="mt-auto border-t border-slate-800/50 py-12 px-6 text-center text-sm text-slate-500">
                <div className="max-w-7xl mx-auto w-full">
                    <p>© 2026 Nexly AI Inc. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
}
