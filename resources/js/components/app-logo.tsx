import AppLogoImage from '@/components/app-logo-image';
import { cn } from '@/lib/utils';
import { useSidebar } from './ui/sidebar';
import AppLogoSecondary from './app-logo-secondary';

export default function AppLogo() {
    const { state } = useSidebar();
    const isCollapsed = state === 'collapsed';

    return (
        <>
            <div className={cn(
                "flex aspect-square items-center justify-center rounded-md text-sidebar-primary-foreground transition-all duration-300",
                isCollapsed ? "w-12 h-8" : "w-14 h-12"
            )}>
                <AppLogoSecondary
                    className={cn(
                        "rounded-md transition-all duration-300",
                        isCollapsed ? "w-12 h-8" : "w-14 h-12"
                    )}
                />
            </div>

            {!isCollapsed && (
                <div className="ml-1 mt-1 grid flex-1 text-left text-sm transition-all animate-in fade-in duration-300">
                    <span className="mb-0.5 truncate leading-tight font-semibold">
                        Nexly
                    </span>
                    <span className="text-muted-foreground text-xs">
                        Plataform
                    </span>
                </div>
            )}
        </>
    );
}
