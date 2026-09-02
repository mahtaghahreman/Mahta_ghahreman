import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mahta-ghahreman.vercel.app";

  const lyrics = [
    "baroon",
    "bikaran",
    "eshgh-virangar",
    "fasle-eshgh",
    "iran",
    "jan-o-del",
    "kaboos",
    "kash",
    "khatereh",
    "kooche-gard",
    "mast-mastam",
    "meykhaneh",
    "panjereh",
    "shekveh",
    "vaghti-residam",
    "vaght-e-masti",
  ];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/music`,
      lastModified: new Date(),
    },
    ...lyrics.map((slug) => ({
      url: `${baseUrl}/lyrics/${slug}`,
      lastModified: new Date(),
    })),
  ];
}
