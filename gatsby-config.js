module.exports = {
  siteMetadata: {
    title: `Creatediv | Brand Identity and Web Development Agency | Calgary, Alberta`,
    description: `Creatediv is a brand identity and web development agency based in Calgary, Canada.`,
    author: `@Ray Masiclat`,
    titleTemplate: `%s`,
    defaultImage: ``,
    twitterUsername: `@creatediv`,
    url: `https://www.creatediv.io`,
    siteUrl: `https://www.workhub.io`,
    image: ``
  },
  plugins: [`gatsby-plugin-react-svg`,
    {
  resolve: "gatsby-plugin-web-font-loader",
  options: {
      custom: {
        families: ["Gotham"],
        urls: ["/fonts/fonts.scss"],
      },
    },
  },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
