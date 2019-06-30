// const path = require('path');

// const createPages = await ({ graphql, actions }) => {
//   const { createPage } = actions;
//   const blogPostTemplate = path.resolve('src/templates/blog-post.js');
//   // Query for markdown nodes to use in creating pages.
//   // You can query for whatever data you want to create pages for e.g.
//   // products, portfolio items, landing pages, etc.
//   // Variables can be added as the second function parameter
//   const pages = graphql(`
//     query loadPagesQuery ($limit: Int!) {
//       allMarkdownRemark(limit: $limit) {
//         edges {
//           node {
//             frontmatter {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `, { limit: 1000 })

//     if (pages.errors) {
//         throw pages.errors;
//     }

//     pages.data.gcms.forEach(edge => {
//         creaePage({
//             path: `${edg}`
//         })
//     })
// };
// module.exports = {
//     createPages,
// };
