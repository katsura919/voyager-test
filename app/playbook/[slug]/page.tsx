import { notFound } from "next/navigation";
import { getPlaybook, getAvailableSlugs } from "@/data/playbooks/index";
import PlaybookTemplate from "@/components/playbook/PlaybookTemplate";

// Pre-render all available playbooks at build time
export async function generateStaticParams() {
  return getAvailableSlugs();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const playbook = getPlaybook(slug);
  if (!playbook) return {};
  return {
    title: `${playbook.heroTitle} ~ Happy Voyager`,
    description: playbook.heroDescription,
  };
}

export default async function PlaybookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const playbook = getPlaybook(slug);

  if (!playbook) notFound();

  return <PlaybookTemplate config={playbook} />;
}
