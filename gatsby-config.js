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
        background_color: `#1A202C`,
        theme_color: `#3BA7F5`,
        display: `minimal-ui`,
        icon: `src/Assets/Images/logo-dark-blue.png`,
      },
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
    },
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: 'AIzaSyAwibEGKRZfn-nE9KbDlxPTG5WzjIgb2fI',
          authDomain: 'whats-plots.firebaseapp.com',
          projectId: 'whats-plots',
          storageBucket: 'whats-plots.appspot.com',
          messagingSenderId: '252232166852',
          appId: '1:252232166852:web:339f6b7163b4bb1550c891',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /Assets/,
        },
      },
    },
  ],
};
