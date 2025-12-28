import { describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import { ApplicationSidebar } from "../../../src/components/sidebar/sidebar";
import { SidebarProvider } from "../../../src/components/ui/sidebar";
import "../../../src/index.css";

vi.mock("@tanstack/react-router", () => ({
	useMatchRoute: vi.fn(() => vi.fn()),
	Link: ({ children, to }: { children: React.ReactNode; to: string }) => (
		<a href={to}>{children}</a>
	),
}));

vi.mock("../../../src/hooks/use-mobile", () => ({
	useIsMobile: vi.fn(() => false),
}));

describe("ApplicationSidebar", () => {
	describe("should display items properly", () => {
		it("should display dashboard item", async () => {
			const { getByText } = await render(
				<SidebarProvider>
					<ApplicationSidebar />
				</SidebarProvider>,
			);
			expect(getByText("Dashboard")).toBeInTheDocument();
		});

		it("should display tasks item", async () => {
			const { getByText } = await render(
				<SidebarProvider>
					<ApplicationSidebar />
				</SidebarProvider>,
			);
			expect(getByText("Tasks")).toBeInTheDocument();
		});
	});
});
