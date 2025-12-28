import { beforeEach, describe, expect, it } from "vitest";
import { type RenderResult, render } from "vitest-browser-react";
import { ApplicationSidebar } from "../../../src/components/sidebar/sidebar";
import { SidebarProvider } from "../../../src/components/ui/sidebar";
import "../../../src/index.css";

describe("ApplicationSidebar", () => {
	let renderResult: RenderResult;

	beforeEach(async () => {
		renderResult = await render(
			<SidebarProvider>
				<ApplicationSidebar />
			</SidebarProvider>,
		);
	});

	describe("should display items properly", () => {
		it("should display dashboard item", async () => {
			expect(renderResult.getByText("Dashboard")).toBeInTheDocument();
		});

		it("should display tasks item", async () => {
			expect(renderResult.getByText("Tasks")).toBeInTheDocument();
		});
	});
});
