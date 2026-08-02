import { MetadataRoute } from "next";

const siteUrl = "https://pico.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/product",
    "/how-it-works",
    "/community",
    "/faq",
    "/contact",
    "/blog",
    "/press-kit",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
