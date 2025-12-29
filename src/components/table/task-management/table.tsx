import { DataTable } from "@/components/ui/data-table";
import type { Task } from "@/stores/tasks/types";
import { columns } from "./columns";

export function TaskManagementTable({ data }: { data: Task[] }) {
	return <DataTable columns={columns} data={data} />;
}
