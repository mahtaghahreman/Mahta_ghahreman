import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mahta-ghahreman.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },

    // اشعار
    {
      url: `${baseUrl}/lyrics/eshgh-virangar`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/lyrics/meykhaneh`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/lyrics/fasle-eshgh`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/lyrics/baroon`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/lyrics/kash`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/lyrics/kaboos`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/lyrics/mast-mastam`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/lyrics/vaght-e-masti`,
      lastModified: new Date(),
    },
  ];
}
