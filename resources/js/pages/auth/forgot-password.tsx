import { Form, Head } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
import { login } from '@/routes';
import { email } from '@/routes/password';

export default function ForgotPassword({ status }: { status?: string }) {
    return (
        <AuthLayout
            title="Recuperar senha"
            description="Insira seu e-mail para receber um link de redefinição"
        >
            <Head title="Esqueci a senha" />

            {status && (
                <div className="mb-4 text-center text-sm font-medium text-emerald-500 bg-emerald-500/10 py-2 rounded-lg border border-emerald-500/20">
                    {status}
                </div>
            )}

            <div className="space-y-6">
                <Form {...email.form()} className="flex flex-col gap-2">
                    {({ processing, errors }) => (
                        <>
                            <div className="grid gap-2">
                                <Label htmlFor="email" className="text-slate-300 font-medium ml-1">
                                    Endereço de e-mail
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    autoComplete="off"
                                    autoFocus
                                    placeholder="nome@empresa.com"
                                    className="py-6 border-slate-800 bg-[#161B29] focus:ring-[#1d7ff0] focus:border-[#1d7ff0] text-white placeholder:text-slate-600 rounded-xl"
                                />

                                <InputError message={errors.email} />
                            </div>

                            <div className="my-2 flex items-center justify-start">
                                <Button
                                    className="w-full py-7 text-base font-bold bg-[#1d7ff0] hover:bg-blue-600 text-white shadow-xl shadow-blue-500/10 transition-all active:scale-[0.99]"
                                    disabled={processing}
                                    data-test="email-password-reset-link-button"
                                >
                                    {processing && (
                                        <LoaderCircle className="h-4 w-4 animate-spin mr-2" />
                                    )}
                                    Enviar link de redefinição
                                </Button>
                            </div>
                        </>
                    )}
                </Form>

                <div className="text-center text-sm text-slate-500">
                    Ou, voltar para o
                    <TextLink
                        href={login()}
                        className="text-[#1d7ff0] ml-2 font-bold hover:text-blue-400 transition-colors"
                    >
                        login
                    </TextLink>
                </div>
            </div>
        </AuthLayout>
    );
}
