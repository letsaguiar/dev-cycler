import { z } from "zod";

export const TaskSchema = z.object({
	id: z.uuid(),
	code: z.string(),
	title: z.string(),
	createdAt: z.date(),
	updatedAt: z.date(),
	archivedAt: z.date().nullable(),
});
export interface Task extends z.infer<typeof TaskSchema> {}

export const Tasks = [
	{
		id: "1",
		code: "1",
		title: "Task 1",
		createdAt: new Date(),
		updatedAt: new Date(),
		archivedAt: null,
	},
	{
		id: "2",
		code: "2",
		title: "Task 2",
		createdAt: new Date(),
		updatedAt: new Date(),
		archivedAt: null,
	},
	{
		id: "3",
		code: "3",
		title: "Task 3",
		createdAt: new Date(),
		updatedAt: new Date(),
		archivedAt: new Date(),
	},
];
