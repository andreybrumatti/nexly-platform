import AppLogoImage from '@/components/app-logo-image';

export default function AppLogo() {
    return (
        <>
            <div className="flex aspect-square size-10 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
                <AppLogoImage />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-semibold">
                    Nexly
                </span>
                <span className="text-muted-foreground">
                    Plataform
                </span>
            </div>
        </>
    );
}
