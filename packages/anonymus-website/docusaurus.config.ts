import { Config } from "@docusaurus/types";
import { themes } from "prism-react-renderer";

export default {
  title: "anonymus",
  tagline: "Generates random, unidentifiable names for any purpose",
  url: "https://anonymus.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Bikossor", // Usually your GitHub org/user name.
  projectName: "anonymus", // Usually your repo name.
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/Bikossor/anonymus/edit/main/packages/anonymus-website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: "anonymus",
      logo: {
        alt: "anonymus Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Documentation",
        },
        {
          href: "https://www.npmjs.com/package/anonymus",
          label: "npm",
          position: "right",
        },
        {
          href: "https://github.com/Bikossor/anonymus",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Introduction",
              to: "/docs/intro",
            },
            {
              label: "Installation",
              to: "/docs/getting-started/installation",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/anonymus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "npm",
              href: "https://www.npmjs.com/package/anonymus",
            },
            {
              label: "GitHub",
              href: "https://github.com/Bikossor/anonymus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} anonymus by Bikossor. Built with Docusaurus.`,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
    },
  },
} satisfies Config;
