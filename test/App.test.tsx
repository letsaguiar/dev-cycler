import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import App from "../src/App";

describe("App", () => {
	test("should render hello world", async () => {
		const { getByText } = await render(<App />);
		expect(getByText("Hello World!")).toBeInTheDocument();
	});
});
