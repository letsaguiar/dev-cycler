import { beforeEach, describe, expect, it } from "vitest";
import { type RenderResult, render } from "vitest-browser-react";
import { TaskListingPage } from "../../src/routes/tasks/index";

describe("TasksPage", () => {
	let renderResult: RenderResult;

	beforeEach(async () => {
		renderResult = await render(<TaskListingPage />);
	});

	it("should render", () => {
		expect(renderResult.getByText('Hello "/tasks/"!'));
	});
});
