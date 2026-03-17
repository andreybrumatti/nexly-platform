import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

interface AppLogoProps extends ComponentProps<'img'> {}

export default function AppLogoImage({ className, ...props }: AppLogoProps) {
    return (
        <img
            src="/assets/simbol-logo.jpg"
            alt="Nexly Platform"
            className={cn('p-1', className)}
            {...props}
        />
    );
}
