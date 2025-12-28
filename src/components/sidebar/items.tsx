import { ClipboardList, Home } from "lucide-react";

export interface ApplicationSidebarItem {
	title: string;
	url: string;
	icon: React.ReactNode;
}

export const ApplicationSidebarItems: ApplicationSidebarItem[] = [
	{
		title: "Dashboard",
		url: "/",
		icon: <Home />,
	},
	{
		title: "Tasks",
		url: "/tasks",
		icon: <ClipboardList />,
	},
];
