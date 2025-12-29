import { beforeEach, describe, expect, it } from "vitest";
import { type RenderResult, render } from "vitest-browser-react";
import { HomePage } from "../../src/routes/index";

describe("HomePage", () => {
	let renderResult: RenderResult;

	beforeEach(async () => {
		renderResult = await render(<HomePage />);
	});

	it("should render", async () => {
		expect(renderResult.getByText("Welcome Home!")).toBeInTheDocument();
	});
});
