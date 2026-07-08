export interface SanityImageAsset {
  _type: 'reference';
  _ref: string;
}

export interface ProjectImage {
  _key?: string;
  alt?: string;
  lqip?: string; // Extracted via GROQ: asset->metadata.lqip
  asset: SanityImageAsset;
}

export interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  year: number;
  tags: string[];
  url?: string;
  coverImage?: ProjectImage;
  gallery?: ProjectImage[];
  body?: unknown[];
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  body?: unknown[];
}
