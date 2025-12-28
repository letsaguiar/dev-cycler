import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-react";
import { HomePage } from "../../src/routes/index";

describe("HomePage", () => {
	it("should render", async () => {
		const { getByText } = await render(<HomePage />);
		expect(getByText("Welcome Home!")).toBeInTheDocument();
	});
});
