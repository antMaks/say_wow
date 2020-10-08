/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-typography, @pittica/gatsby-plugin-seo, gatsby-plugin-react-helmet`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        image: `/DEFAULT_SHARING_IMAGE.jpg`,
        socials: {
          instagram: {
            username: `INSTAGRAM_USERNAME`
          },
          github: {
            username: `GITHUB_USERNAME`
          },
          facebook: {
            page: `FACEBOOK_PAGE_USERNAME`,
            app: `FACEBOOK_APP_ID`
          },
          twitter: {
            username: `TWITTER_USERNAME`,
            site: `TWITTER_SITE_USERNAME`
          },
          linkedin: {
            page: `LINKEDIN_PAGE_USERNAME`
          }
        }
      }
    }
  ]
}
