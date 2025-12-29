import { createFileRoute } from "@tanstack/react-router";
import { TaskManagementTable } from "@/components/table/task-management/table";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tasks } from "@/stores/tasks/types";

export const Route = createFileRoute("/tasks/")({
	component: TaskListingPage,
});

export function TaskListingPage() {
	return (
		<div data-testid="task-listing-page">
			<Card>
				<CardHeader>
					<CardTitle>Task Management</CardTitle>
					<CardDescription>Create and manage your tasks</CardDescription>
				</CardHeader>
				<CardContent>
					<TaskManagementTable data={Tasks} />
				</CardContent>
			</Card>
		</div>
	);
}
