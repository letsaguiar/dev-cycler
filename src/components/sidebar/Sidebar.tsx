import { Link, useMatchRoute } from "@tanstack/react-router";
import { ClipboardList, Home } from "lucide-react";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "../ui/sidebar";

interface ApplicationSidebarItem {
	title: string;
	url: string;
	icon: React.ReactNode;
}

export function ApplicationSidebar() {
	const matchRoute = useMatchRoute();

	const items: ApplicationSidebarItem[] = [
		{
			title: "Dashboard",
			url: "/",
			icon: <Home />,
		},
		{
			title: "Tasks",
			url: "/tasks",
			icon: <ClipboardList />
		}
	];

	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Application</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton isActive={!!matchRoute({ to: item.url })} asChild>
										<Link to={item.url}>
											{item.icon}
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
