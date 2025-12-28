import { defineConfig, mergeConfig } from "vitest/config";
import { playwright } from "@vitest/browser-playwright";
import viteConfig from "./vite.config";

export default mergeConfig(
	viteConfig as any,
	defineConfig({
		test: {
			browser: {
				enabled: true,
				provider: playwright(),
				instances: [
					{
						browser: "chromium",
						viewport: { width: 1280, height: 720 },
					},
				],
			},
		},
	}),
);
