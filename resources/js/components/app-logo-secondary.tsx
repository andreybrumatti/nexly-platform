import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

interface AppLogoSecondary extends ComponentProps<'img'> {}

export default function AppLogoSecondary({ className, ...props }: AppLogoSecondary) {
    return (
        <img
            src="/assets/logo.png"
            alt="Nexly Platform"
            className={cn('p-1', className)}
            {...props}
        />
    );
}

