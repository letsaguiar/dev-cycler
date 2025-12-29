import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ApplicationSidebar } from "@/components/sidebar/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

function RootLayout() {
	return (
		<SidebarProvider>
			<ApplicationSidebar />
			<main>
				<SidebarTrigger />
				<div className="px-16 py-8">
					<Outlet />
				</div>
				<TanStackRouterDevtools />
			</main>
		</SidebarProvider>
	);
}

export const Route = createRootRoute({ component: RootLayout });
