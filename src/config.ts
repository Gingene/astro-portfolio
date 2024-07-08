export const siteConfig: SiteConfig = {
  title: "Gingene",
  language: "zh-tw",
  description: "Gingene's blog",
  keywords: "Astro, portfolio, Gingene's blog",
  author: "Gingene",
  avatar: "/avatar.png",
  favicon: "/favicon.ico",
  site: "https://silverfungi.vercel.app/",

  page_size: 10,
};

export const navBarConfig: NavBarConfig = {
  links: [
    {
      name: "Projects",
      url: "/projects",
    },
    {
      name: "Links",
      url: "/links",
    },
    {
      name: "About",
      url: "/about",
    },
  ],
};

export const socialLinks: SocialLink[] = [
  // https://icon-sets.iconify.design/material-symbols/
  {
    label: "GitHub",
    icon: "mdi-github",
    url: "https://github.com/Gingene",
  },
];

interface SiteConfig {
  title: string;
  language: string;
  description: string;
  keywords: string;
  author: string;
  avatar: string;
  favicon: string;
  site: string;

  page_size: number;
  twikoo_uri?: string; // https://twikoo.js.org/
}

interface NavBarConfig {
  links: {
    name: string;
    url: string;
    target?: string;
  }[];
}

interface SocialLink {
  label: string;
  icon: string;
  url: string;
}
