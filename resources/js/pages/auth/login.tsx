import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';
import { redirect as googleRedirect } from '@/routes/socialite';

export default function Login({ status, canResetPassword, canRegister }: { status?: string; canResetPassword: boolean; canRegister: boolean }) {
    return (
        <AuthLayout
            title="Bem-vindo de volta"
            description="Insira suas credenciais para acessar seu painel"
        >
            <Head title="Entrar" />

            <div className="grid gap-6">
                <a href={googleRedirect.url()} className="w-full">
                    <Button
                        variant="outline"
                        className="w-full py-6 font-medium border-slate-800 bg-[#161B29] text-slate-300 rounded-xl shadow-sm transition-all active:scale-[0.98] hover:bg-slate-800 hover:text-white cursor-pointer"
                        type="button"
                    >
                    <img src="/assets/google-icon-logo.svg" alt="Google Logo" className="mr-2 h-5 w-5" />
                    Entrar com Google
                    </Button>
                </a>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-slate-800" />
                    </div>
                    <div className="relative flex justify-center text-xs">
                        <span className="bg-[#0B0F1A] px-4 text-slate-500 font-medium">
                            Ou continue com e-mail
                        </span>
                    </div>
                </div>

                <Form {...store.form()} resetOnSuccess={['password']} className="flex flex-col gap-6">
                    {({ processing, errors }) => (
                        <>
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="email" className="text-slate-300 font-medium ml-1">Endereço de e-mail</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        autoFocus
                                        placeholder="nome@empresa.com"
                                        className="py-6 border-slate-800 bg-[#161B29] focus:ring-[#1d7ff0] focus:border-[#1d7ff0] text-white placeholder:text-slate-600 rounded-xl"
                                    />
                                    <InputError message={errors.email} />
                                </div>

                                <div className="grid gap-2">
                                    <div className="flex items-center justify-between ml-1">
                                        <Label htmlFor="password" className="text-slate-300 font-medium">Senha</Label>
                                        {canResetPassword && (
                                            <TextLink href={request()} className="text-xs font-bold text-[#1d7ff0] hover:text-blue-400 transition-colors">
                                                Esqueceu a senha?
                                            </TextLink>
                                        )}
                                    </div>
                                    <PasswordInput
                                        id="password"
                                        name="password"
                                        required
                                        placeholder="••••••••"
                                        className="py-6 border-slate-800 bg-[#161B29] focus:ring-[#1d7ff0] focus:border-[#1d7ff0] text-white placeholder:text-slate-600 rounded-xl"
                                    />
                                    <InputError message={errors.password} />
                                </div>

                                <div className="flex items-center space-x-2 py-2 ml-1">
                                    <Checkbox
                                        id="remember"
                                        name="remember"
                                        className="border-slate-700 bg-[#161B29] data-[state=checked]:bg-[#1d7ff0]"
                                    />
                                    <Label htmlFor="remember" className="text-sm text-slate-400 font-normal cursor-pointer select-none hover:text-slate-300">
                                        Lembrar de mim por 30 dias
                                    </Label>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full py-7 text-base font-bold bg-[#1d7ff0] hover:bg-blue-600 text-white shadow-xl shadow-blue-500/10 transition-all active:scale-[0.99] cursor-pointer"
                                    disabled={processing}
                                >
                                    {processing && <Spinner className="mr-2 h-4 w-4" />}
                                    Entrar no Painel
                                </Button>
                            </div>

                            {canRegister && (
                                <div className="text-center text-sm text-slate-500 mt-2">
                                    Não tem uma conta?
                                    <TextLink href={register()} className="text-[#1d7ff0] ml-2 font-bold hover:text-blue-400">
                                        Crie sua conta gratuita
                                    </TextLink>
                                </div>
                            )}
                        </>
                    )}
                </Form>
            </div>

            {status && <div className="mt-4 text-center text-sm font-medium text-emerald-500 bg-emerald-500/10 py-2 rounded-lg border border-emerald-500/20">{status}</div>}
        </AuthLayout>
    );
}
