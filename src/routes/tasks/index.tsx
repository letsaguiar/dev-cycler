import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tasks/")({
	component: TaskListingPage,
});

export function TaskListingPage() {
	return <div>Hello "/tasks/"!</div>;
}