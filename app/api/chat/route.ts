import { streamText, UIMessage, convertToModelMessages } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { phases } from "@/app/playbook/spain-dnv/data";
import { guides } from "@/app/playbook/spain-dnv/guides/data";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// Helper to format the playbook data into a readable string for the LLM
function getSystemPrompt() {
  let context =
    "You are an expert assistant for the 'Spain DNV Playbook', a guide for digital nomads moving to Spain.\n\n";
  context +=
    "Answer user questions based ONLY on the following information from the playbook. Do not invent information. If the answer is not in the playbook, say you don't know.\n\n";

  context += "=== PLAYBOOK LESSONS ===\n";
  phases.forEach((phase) => {
    context += `\nPhase: ${phase.title}\n`;
    phase.lessons.forEach((lesson) => {
      context += `- Lesson: ${lesson.title}\n`;
      context += `  Description: ${lesson.description}\n`;
      context += `  Details: ${lesson.bullets.join(", ")}\n`;
    });
  });

  context += "\n=== PLAYBOOK GUIDES ===\n";
  guides.forEach((guide) => {
    context += `\nGuide: ${guide.title} (${guide.subtitle})\n`;
    guide.sections.forEach((section) => {
      context += `- Section: ${section.title}\n`;
      section.content.forEach((block: any) => {
        if (block.type === "intro" || block.type === "callout") {
          context += `  ${block.text}\n`;
        } else if (block.type === "highlight" || block.type === "checklist") {
          context += `  ${block.label || ""}: ${block.items?.join(", ")}\n`;
        } else if (block.type === "expandable") {
          context += `  Topic: ${block.title}\n`;
          block.content?.forEach((subBlock: any) => {
            if (subBlock.type === "intro" || subBlock.type === "callout") {
              context += `    ${subBlock.text}\n`;
            } else if (subBlock.type === "list" && subBlock.items) {
              context += `    ${subBlock.items.join(", ")}\n`;
            }
          });
        }
      });
    });
  });

  return context;
}

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: google("gemini-2.5-flash"),
    system: getSystemPrompt(),
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
