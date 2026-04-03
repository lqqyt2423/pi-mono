import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

export default function removeSkillsSectionExtension(pi: ExtensionAPI) {
	pi.on("before_agent_start", async (event) => {
		let systemPrompt = event.systemPrompt || "";

		// 移除 <available_skills> 标签及其内容
		systemPrompt = systemPrompt.replace(/<available_skills>[\s\S]*?<\/available_skills>/g, "");

		// 移除 skills 相关的引导文字
		systemPrompt = systemPrompt.replace(
			/\n\n?The following skills provide specialized instructions for specific tasks\.[\s\S]*?use that absolute path in tool commands\./g,
			""
		);

		return { systemPrompt };
	});
}
