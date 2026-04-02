import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";
import { execFile } from "node:child_process";

export default function (pi: ExtensionAPI) {
	pi.on("agent_end", async (_event, ctx) => {
		execFile("afplay", ["/System/Library/Sounds/Glass.aiff"]);
	});
};
