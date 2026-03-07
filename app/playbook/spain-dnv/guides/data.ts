export type ContentBlock =
  | { type: "intro"; text: string }
  | { type: "highlight"; label?: string; items: string[] }
  | { type: "checklist"; label?: string; items: string[] }
  | {
      type: "callout";
      icon: string;
      text: string;
      bgClass?: string;
      borderClass?: string;
    };

export type Section = {
  id: string;
  title: string;
  content: ContentBlock[];
};

export type Guide = {
  id: string;
  title: string;
  subtitle: string;
  sections: Section[];
};

export const guides: Guide[] = [
  {
    id: "whats-this-playbook-about",
    title: "What's this visa about and do I qualify?",
    subtitle: "Get started",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: [
          {
            type: "intro",
            text: "Spain's Digital Nomad Visa (officially “Visado de Teletrabajador”) allows non-EU remote workers to live legally in Spain while working for companies or clients outside Spain. It’s one of Europe’s most attractive options for digital nomads. Introduced in 2023 as part of Spain’s Startup Act, the visa lets non-EU citizens (including UK nationals) live & work remotely in Spain for up to five years.",
          },
        ],
      },
      {
        id: "eligibility",
        title: "Who is eligible?",
        content: [
          {
            type: "highlight",
            label: "Basic Qualifications",
            items: [
              "Age: 18+",
              "Nationality: Non-EU/EEA citizens only",
              "Work Status: Remote employee OR freelancer/entrepreneur",
              "Professional credentials: A university degree (bachelor’s or higher), OR 3+ years documented work experience in your field",
            ],
          },
          {
            type: "highlight",
            label: "Income Requirements (2026)",
            items: [
              "Single applicant: €2,894/month minimum (gross, before taxes)",
              "With spouse/partner: €4,017/month minimum",
              "Each additional dependent: Add 25% of base amount",
            ],
          },
          {
            type: "callout",
            icon: "📝",
            text: "Note: These thresholds are tied to Spain’s minimum wage and can increase over time.",
            bgClass: "bg-[#F1F1EF]",
            borderClass: "border-transparent text-[#37352f]",
          },
          {
            type: "checklist",
            label: "Other Requirements",
            items: [
              "Clean criminal record (past 5 years)",
              "Valid passport with at least 12+ months remaining",
              "Private health insurance valid in Spain",
              "Applicant must not have been a resident in Spain in the past 5 years",
            ],
          },
        ],
      },
      {
        id: "work-requirements",
        title: "Work Requirements",
        content: [
          {
            type: "highlight",
            label: "For employees:",
            items: [
              "You must have an employment contract with a company outside Spain",
              "Company must have been operating for 1+ year",
              "You need a letter from your employer confirming remote work permission",
            ],
          },
          {
            type: "highlight",
            label: "For freelancers:",
            items: [
              "At least 80% of your income must come from clients outside Spain",
              "You can work up to 20% for Spanish clients",
              "Your business must be established for 1+ year",
            ],
          },
        ],
      },
      {
        id: "getting-into-spain",
        title: "Getting into Spain",
        content: [
          {
            type: "intro",
            text: "If you use the UGE route (online application via Unit for Large Enterprises & Strategic Collectives), you might need a Schengen visa to enter Spain first (if your nationality requires it).",
          },
          {
            type: "callout",
            icon: "🌍",
            text: "FUN FACT: Did you know that you can get a Schengen Visa from any country regardless if you’re just a tourist?\n\nYou just need to prove:\n✔ You’re a long-term traveller (been out of your country for more than 6 months+)\nor..\n✔ You have an exceptional circumstance. Read more about it here.\n\nI did this twice in the USA 🇺🇸 and Bosnia 🇧🇦 via the Netherlands Embassy. 👉 Here’s the proof.\n\nI love applying via the Netherlands as they have been really generous. I always get 90-days multiple entry even when I only requested for 2-weeks. I heard you can do this via France Embassy as well. But they tend to give you lesser days than Netherlands.",
            bgClass: "bg-[#EDF3EC]",
            borderClass: "border-[#D1E2CD]",
          },
          {
            type: "intro",
            text: "If you want to apply via Netherlands 🇳🇱 like I did, here’s how to start.",
          },
        ],
      },
    ],
  },
];
