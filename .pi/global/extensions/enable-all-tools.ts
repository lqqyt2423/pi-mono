import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

export default function (pi: ExtensionAPI) {
	pi.on("session_start", async () => {
		const allTools = pi.getAllTools();
		pi.setActiveTools(allTools.map((t) => t.name));
	});
};
