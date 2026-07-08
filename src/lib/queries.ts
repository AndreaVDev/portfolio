// GROQ: spread (...) keeps the asset reference intact for urlFor(),
// while the aliased "lqip" field dereferences the asset to grab the LQIP string.

export const projectsQuery = `
  *[_type == "project"] | order(year desc) {
    _id,
    title,
    slug,
    description,
    year,
    tags,
    url
  }
`;

export const projectSlugsQuery = `
  *[_type == "project"] { "slug": slug.current }
`;

export const projectBySlugQuery = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    year,
    tags,
    url,
    body,
    "coverImage": coverImage {
      ...,
      "lqip": asset->metadata.lqip
    },
    "gallery": gallery[] {
      ...,
      "lqip": asset->metadata.lqip
    }
  }
`;

export const blogPostsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt
  }
`;

export const blogSlugsQuery = `
  *[_type == "post"] { "slug": slug.current }
`;

export const blogPostBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    body
  }
`;
