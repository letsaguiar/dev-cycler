import { ClipboardList, Home } from "lucide-react";

export interface ApplicationSidebarItem {
	title: string;
	url: string;
	icon: React.ReactNode;
	testId: string;
}

export const ApplicationSidebarItems: ApplicationSidebarItem[] = [
	{
		title: "Dashboard",
		url: "/",
		icon: <Home />,
		testId: "dashboard",
	},
	{
		title: "Tasks",
		url: "/tasks",
		icon: <ClipboardList />,
		testId: "tasks",
	},
];
