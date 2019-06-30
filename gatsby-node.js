const path = require('path');
const slug = require('slug');

const createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogPostTemplate = require.resolve(
        path.join(__dirname, './src/templates/blog-post/index.js')
    );
    // Query for markdown nodes to use in creating pages.
    // You can query for whatever data you want to create pages for e.g.
    // products, portfolio items, landing pages, etc.
    // Variables can be added as the second function parameter
    const pages = await graphql(`
        query loadPagesQuery {
            gcms {
                blogPosts(orderBy: createdAt_DESC) {
                    id
                    title
                }
            }
        }
    `);

    if (pages.errors) {
        throw pages.errors;
    }

    pages.data.gcms.blogPosts.forEach(blogPost => {
        createPage({
            path: slug(blogPost.title, { lower: true }),
            component: blogPostTemplate,
            context: {
                id: blogPost.id,
            },
        });
    });
};

module.exports = {
    createPages,
};
