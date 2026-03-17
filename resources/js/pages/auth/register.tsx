import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';
import { login } from '@/routes';
import { store } from '@/routes/register';

export default function Register() {
    return (
        <AuthLayout
            title="Crie sua conta"
            description="Insira seus dados abaixo para começar sua jornada"
        >
            <Head title="Cadastro" />

            <div className="grid gap-6">
                <Button
                    variant="outline"
                    className="w-full py-6 font-medium border-slate-800 bg-[#161B29] text-slate-300 rounded-xl shadow-sm transition-all active:scale-[0.98] hover:bg-slate-800 hover:text-white cursor-pointer"
                    type="button"
                >
                    <img src="/assets/google-icon-logo.svg" alt="Google Logo" className="mr-2 h-5 w-5" />
                    Cadastrar com Google
                </Button>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-slate-800" />
                    </div>
                    <div className="relative flex justify-center text-xs">
                        <span className="bg-[#0B0F1A] px-4 text-slate-500 font-medium italic">
                            Ou preencha os dados
                        </span>
                    </div>
                </div>

                <Form
                    {...store.form()}
                    resetOnSuccess={['password', 'password_confirmation']}
                    disableWhileProcessing
                    className="flex flex-col gap-6"
                >
                    {({ processing, errors }) => (
                        <>
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="name" className="text-slate-300 font-medium ml-1">Nome completo</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="name"
                                        name="name"
                                        placeholder="Seu nome completo"
                                        className="py-6 border-slate-800 bg-[#161B29] focus:ring-[#1d7ff0] focus:border-[#1d7ff0] text-white placeholder:text-slate-600 rounded-xl"
                                    />
                                    <InputError message={errors.name} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="email" className="text-slate-300 font-medium ml-1">Endereço de e-mail</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        required
                                        tabIndex={2}
                                        autoComplete="email"
                                        name="email"
                                        placeholder="nome@empresa.com"
                                        className="py-6 border-slate-800 bg-[#161B29] focus:ring-[#1d7ff0] focus:border-[#1d7ff0] text-white placeholder:text-slate-600 rounded-xl"
                                    />
                                    <InputError message={errors.email} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="password" className="text-slate-300 font-medium ml-1">Senha</Label>
                                    <PasswordInput
                                        id="password"
                                        required
                                        tabIndex={3}
                                        autoComplete="new-password"
                                        name="password"
                                        placeholder="No mínimo 8 caracteres"
                                        className="py-6 border-slate-800 bg-[#161B29] focus:ring-[#1d7ff0] focus:border-[#1d7ff0] text-white placeholder:text-slate-600 rounded-xl"
                                    />
                                    <InputError message={errors.password} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="password_confirmation" className="text-slate-300 font-medium ml-1">
                                        Confirmar senha
                                    </Label>
                                    <PasswordInput
                                        id="password_confirmation"
                                        required
                                        tabIndex={4}
                                        autoComplete="new-password"
                                        name="password_confirmation"
                                        placeholder="Repita sua senha"
                                        className="py-6 border-slate-800 bg-[#161B29] focus:ring-[#1d7ff0] focus:border-[#1d7ff0] text-white placeholder:text-slate-600 rounded-xl"
                                    />
                                    <InputError message={errors.password_confirmation} />
                                </div>

                                <Button
                                    type="submit"
                                    className="mt-2 w-full py-7 text-base font-bold cursor-pointer bg-[#1d7ff0] hover:bg-blue-600 text-white shadow-xl shadow-blue-500/10 transition-all active:scale-[0.99]"
                                    tabIndex={5}
                                    disabled={processing}
                                    data-test="register-user-button"
                                >
                                    {processing && <Spinner className="mr-2 h-4 w-4" />}
                                    Criar minha conta gratuita
                                </Button>
                            </div>

                            <div className="text-center text-sm text-slate-500">
                                Já possui uma conta?
                                <TextLink
                                    href={login()}
                                    className="text-[#1d7ff0] ml-2 font-bold hover:text-blue-400 transition-colors"
                                    tabIndex={6}
                                >
                                  Fazer login
                                </TextLink>
                            </div>
                        </>
                    )}
                </Form>
            </div>
        </AuthLayout>
    );
}
