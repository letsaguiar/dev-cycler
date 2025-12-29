import type { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
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
		cell: ({ row }) => {
			const createdAt = row.original.createdAt;
			return <span>{format(createdAt, "yyyy-MM-dd HH:mm")}</span>;
		},
	},
];
