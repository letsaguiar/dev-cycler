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
