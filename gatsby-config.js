module.exports = {
  siteMetadata: {
    title: 'Fashion Teller',
    description: 'Complete courses about the best tools and design systems. Prototype and build apps with React and Swift. 60 hours of video content and resource materials. No coding experience required.',
    keywords: 'react course, react for designers, ios development, sketch app, swift app course, arkit 2, after effects, create sketch plugin'
  },
  plugins: [
      'gatsby-plugin-react-helmet',
      {
          resolve: 'gatsby-source-contentful',
          options: {
              spaceId: 'ug0suoj1r0ob',
              accessToken: '896d43f5d0c08a5c55d1771a496f11d734bbbe9a1c788fd6f38fec1ca74d8337'
          }
      }
    ],
}
