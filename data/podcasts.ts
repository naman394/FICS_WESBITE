export interface Podcast {
  id: number;
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

export const podcasts: Podcast[] = [
  {
    id: 0,
    title: "DPDP Act (Hindi) Overview",
    slug: "dpdp-act-hindi-overview",
    date: "Dec 13, 2024",
    duration: "10:00",
    host: "FICS Team",
    description: "A comprehensive breakdown of the Digital Personal Data Protection Act (DPDP) in Hindi, explaining key provisions and compliance requirements.",
    fullDescription: "Detailed discussion on the Digital Personal Data Protection Act (DPDP) 2023. This episode covers the applicability of the act, rights of data principals, obligations of data fiduciaries, and the penalties for non-compliance. Essential listening for businesses operating in India.",
    image: "/assets/images/podcasts/podcast-1-dpdp.jpg",
    audioUrl: "/audios/DPDT_ACT_HINDI_1.mp3",
    category: "Legal Frameworks"
  },
  {
    id: 1,
    title: "The Future of Digital Forensics",
    slug: "future-of-digital-forensics",
    date: "Dec 12, 2024",
    duration: "14:20",
    host: "Dr. Sarah Mitchell",
    description: "Exploring how AI is reshaping the landscape of cyber investigations and evidence analysis.",
    fullDescription: "In this episode, we explore how Artificial Intelligence and Machine Learning are revolutionizing digital forensics. From automated evidence processing to deep fake detection, discover the tools and techniques that are shaping the future of investigations.",
    image: "/assets/images/podcasts/podcast-2-future.jpg",
    audioUrl: "/assets/audio/soundhelix-1.mp3",
    category: "Technology trends"
  },
  {
    id: 2,
    title: "Uncovering Financial Fraud Patterns",
    slug: "uncovering-financial-fraud-patterns",
    date: "Dec 11, 2024",
    duration: "18:45",
    host: "James Carter",
    description: "A deep dive into the red flags of corporate embezzlement and how forensic accountants track the money.",
    fullDescription: "Financial fraud is becoming increasingly sophisticated. Join us as we dissect common fraud schemes like shell companies, ghost employees, and skimming. We'll discuss the red flags that every auditor and business owner should look out for.",
    image: "/assets/images/podcasts/podcast-3-fraud.jpg",
    audioUrl: "/assets/audio/soundhelix-2.mp3",
    category: "Financial Fraud"
  },
  {
    id: 3,
    title: "Cyber Security in the Remote Era",
    slug: "cyber-security-remote-era",
    date: "Dec 10, 2024",
    duration: "12:10",
    host: "Emily Chen",
    description: "Discussing the vulnerabilities of remote workforces and strategies to secure distributed networks.",
    fullDescription: "With the rise of remote work, the attack surface for cyber criminals has expanded. This episode focuses on securing remote endpoints, the importance of VPNs and ZTNA, and how to train employees to recognize phishing attempts in a home environment.",
    image: "/assets/images/podcasts/podcast-4-remote.jpg",
    audioUrl: "/assets/audio/soundhelix-3.mp3",
    category: "Cybersecurity"
  },
  {
    id: 4,
    title: "IPR Protection Strategies",
    slug: "ipr-protection-strategies",
    date: "Dec 09, 2024",
    duration: "16:30",
    host: "Michael Ross",
    description: "Legal experts share insights on protecting intellectual property rights in global markets.",
    fullDescription: "Intellectual Property is often a company's most valuable asset. Learn about the strategies for registering and enforcing trademarks, patents, and copyrights globally. We also discuss how to handle IP infringement and counterfeiting.",
    image: "/assets/images/podcasts/podcast-5-ipr.jpg",
    audioUrl: "/assets/audio/soundhelix-4.mp3",
    category: "Legal Frameworks"
  }
];

export function getPodcastBySlug(slug: string): Podcast | undefined {
  return podcasts.find((podcast) => podcast.slug === slug);
}

export function getRelatedPodcasts(currentId: number, limit: number = 3): Podcast[] {
  return podcasts
    .filter((podcast) => podcast.id !== currentId)
    .slice(0, limit);
}

export function getAllTags(): string[] {
  const tags = new Set(podcasts.map(podcast => podcast.category));
  return Array.from(tags);
}
