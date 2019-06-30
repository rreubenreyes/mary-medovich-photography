const path = require('path');
const slug = require('slug');

const createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogPostTemplate = require.resolve(
        path.join(__dirname, './src/templates/blog-post.js')
    );
    // Query for markdown nodes to use in creating pages.
    // You can query for whatever data you want to create pages for e.g.
    // products, portfolio items, landing pages, etc.
    // Variables can be added as the second function parameter
    const pages = await graphql(`
        query loadPagesQuery {
            gcms {
                blogPosts(orderBy: createdAt_DESC) {
                    title
                    content {
                        markdown
                    }
                    createdAt
                    updatedAt
                }
                tags {
                    name
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
                ...blogPost,
            },
        });
    });
};

module.exports = {
    createPages,
};
