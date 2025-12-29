import type { ColumnDef } from "@tanstack/react-table";
import type { Task } from "@/stores/tasks/types";

export const columns: ColumnDef<Task>[] = [
	{
		accessorKey: "code",
		header: "Code",
	},
	{
		accessorKey: "title",
		header: "Title",
	},
	{
		accessorKey: "createdAt",
		header: "Created At",
	},
];
