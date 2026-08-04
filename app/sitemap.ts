import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [

    {
      url: "https://mahta-ghahreman.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: "https://mahta-ghahreman.vercel.app/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: "https://mahta-ghahreman.vercel.app/lyrics",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },

    {
      url: "https://mahta-ghahreman.vercel.app/lyrics/khatereh",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: "https://mahta-ghahreman.vercel.app/lyrics/panjereh",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: "https://mahta-ghahreman.vercel.app/lyrics/vaghti-residam",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },

  ];
}
