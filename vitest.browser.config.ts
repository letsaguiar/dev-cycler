import { playwright } from "@vitest/browser-playwright";
import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			setupFiles: ["./test/testSetup.tsx"],
			browser: {
				enabled: true,
				provider: playwright(),
				instances: [{ browser: "chromium" }],
			},
		},
	}),
);
