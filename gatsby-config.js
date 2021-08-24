module.exports = {
  siteMetadata: {
    title: `Plots - What's Plots?`,
    description: `Plots - The best social media app to find and host great local parties.`,
    author: `caelinsutch`,
    siteUrl: `https://whatsplots.app`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `plots-marketing`,
        short_name: `plots`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/Assets/Images/logo-dark-blue.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
    },
  ],
};
