import { vi } from "vitest";

vi.mock("@tanstack/react-router", async (importOriginal) => ({
	...(await importOriginal()),
	useMatchRoute: vi.fn(() => vi.fn()),
	Link: ({ children, to }: { children: React.ReactNode; to: string }) => (
		<a href={to}>{children}</a>
	),
}));

vi.mock("@/hooks/use-mobile", () => ({
	useIsMobile: vi.fn(() => false),
}));
