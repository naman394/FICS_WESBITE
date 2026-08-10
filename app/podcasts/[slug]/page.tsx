import { notFound } from 'next/navigation';
import { getPodcastBySlug, getRelatedPodcasts } from '@/lib/podgen';
import PodcastDetail from '@/components/PodcastDetail';

export const revalidate = 60;

interface PodcastDetailPageProps {
  params: { slug: string };
}

export default async function PodcastDetailPage({ params }: PodcastDetailPageProps) {
  const podcast = await getPodcastBySlug(params.slug);

  if (!podcast) {
    notFound();
  }

  const relatedPodcasts = await getRelatedPodcasts(podcast.slug, 3);

  return <PodcastDetail podcast={podcast} relatedPodcasts={relatedPodcasts} />;
}
