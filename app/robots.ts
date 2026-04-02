import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Explicitly allow all social media link-preview scrapers.
      // These Allow rules override the Disallow injected by Cloudflare's
      // "Block AI Bots" managed robots.txt content for the same user agents.
      { userAgent: "facebookexternalhit", allow: "/" },
      { userAgent: "meta-externalagent", allow: "/" },
      { userAgent: "Twitterbot", allow: "/" },
      { userAgent: "LinkedInBot", allow: "/" },
      { userAgent: "WhatsApp", allow: "/" },
      { userAgent: "Slackbot", allow: "/" },
      { userAgent: "TelegramBot", allow: "/" },
      { userAgent: "Discordbot", allow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    sitemap: "https://vince-and-era-invites.weddinginvitationrsvp.com/sitemap.xml",
  }
}