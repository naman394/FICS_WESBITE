/**
 * Podgen public content API client — fetches FICS's blog posts and podcast
 * episodes from the shared Podgen backend (same data the WhatsApp pipeline
 * publishes to). Used server-side by page.tsx files so content is present
 * in the initial SSR'd HTML (real SEO, unlike the embed-widget path).
 */

const PODGEN_API_BASE = (process.env.PODGEN_API_BASE || 'http://localhost:8000').replace(/\/$/, '');
const PODGEN_CLIENT_SLUG = process.env.PODGEN_CLIENT_SLUG || 'fics';

// Revalidate every 60s (ISR) so newly-published content shows up without a full redeploy.
const FETCH_OPTS = { next: { revalidate: 60 } } as const;

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  fullContent: string; // pre-rendered HTML
  image: string;
  date: string;
  category: string;
  categoryColor: string;
  slug: string;
  readTime: string;
}

export interface Podcast {
  id: string;
  title: string;
  slug: string;
  date: string;
  duration: string;
  host: string;
  description: string;
  fullDescription: string;
  image: string;
  audioUrl: string;
  category: string;
}

const CATEGORY_COLORS = [
  'bg-cyan-500', 'bg-amber-500', 'bg-rose-500',
  'bg-emerald-500', 'bg-indigo-500', 'bg-fuchsia-500',
];

function categoryColorFor(category: string): string {
  let hash = 0;
  for (let i = 0; i < category.length; i++) hash = (hash * 31 + category.charCodeAt(i)) >>> 0;
  return CATEGORY_COLORS[hash % CATEGORY_COLORS.length];
}

// Podgen returns published_at as a raw ISO timestamp; the site's cards/detail
// pages expect a short display string like the old hand-written "Dec 09, 2024".
function formatDate(iso: string): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
}

function toBlogPost(raw: any): BlogPost {
  return {
    id: raw.id,
    title: raw.title || '',
    description: raw.description || '',
    fullContent: raw.fullContent || '',
    image: raw.image || '',
    date: formatDate(raw.date || ''),
    category: raw.category || '',
    categoryColor: categoryColorFor(raw.category || ''),
    slug: raw.slug,
    readTime: raw.readTime || '',
  };
}

function toPodcast(raw: any): Podcast {
  return {
    id: raw.id,
    title: raw.title || '',
    slug: raw.slug,
    date: formatDate(raw.date || ''),
    duration: raw.duration || '',
    host: raw.host || '',
    description: raw.description || '',
    fullDescription: raw.fullDescription || '',
    image: raw.image || '',
    audioUrl: raw.audioUrl || '',
    category: raw.category || '',
  };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${PODGEN_API_BASE}/api/public/${PODGEN_CLIENT_SLUG}/posts?limit=50`, FETCH_OPTS);
    if (!res.ok) return [];
    const data = await res.json();
    return (data.posts || []).map(toBlogPost);
  } catch {
    return [];
  }
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`${PODGEN_API_BASE}/api/public/${PODGEN_CLIENT_SLUG}/posts/${encodeURIComponent(slug)}`, FETCH_OPTS);
    if (!res.ok) return null;
    return toBlogPost(await res.json());
  } catch {
    return null;
  }
}

export async function getRelatedBlogs(currentSlug: string, limit = 3): Promise<BlogPost[]> {
  const all = await getBlogPosts();
  return all.filter((b) => b.slug !== currentSlug).slice(0, limit);
}

export async function getPodcasts(): Promise<Podcast[]> {
  try {
    const res = await fetch(`${PODGEN_API_BASE}/api/public/${PODGEN_CLIENT_SLUG}/podcasts?limit=50`, FETCH_OPTS);
    if (!res.ok) return [];
    const data = await res.json();
    return (data.podcasts || []).map(toPodcast);
  } catch {
    return [];
  }
}

export async function getPodcastBySlug(slug: string): Promise<Podcast | null> {
  try {
    const res = await fetch(`${PODGEN_API_BASE}/api/public/${PODGEN_CLIENT_SLUG}/podcasts/${encodeURIComponent(slug)}`, FETCH_OPTS);
    if (!res.ok) return null;
    return toPodcast(await res.json());
  } catch {
    return null;
  }
}

export async function getRelatedPodcasts(currentSlug: string, limit = 3): Promise<Podcast[]> {
  const all = await getPodcasts();
  return all.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
