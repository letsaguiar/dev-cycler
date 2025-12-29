import { createFileRoute } from "@tanstack/react-router";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

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
			</Card>
		</div>
	);
}
