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
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: 'AIzaSyCE4ATdzq6p3aK1wIQ6u0Yr_vZvaCFZUmY',
          authDomain: 'flare-social.firebaseapp.com',
          projectId: 'flare-social',
          storageBucket: 'flare-social.appspot.com',
          messagingSenderId: '889204980004',
          appId: '1:889204980004:web:0f69ea27a1f6709d84dbb1',
          measurementId: 'G-LHCS3RKPVQ',
        },
      },
    },
  ],
};
