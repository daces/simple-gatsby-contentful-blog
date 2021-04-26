const path = require('path');

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;

	return new Promise((resolve, reject) => {
		const blogPostTemplate = path.resolve('src/templates/blog-template.js');
		resolve(
			graphql(`
				{
					allContentfulBlogPost {
						edges {
							node {
								id
								slug
								title
							}
						}
					}
				}
			`).then((blog) => {
				if (blog.errors) {
					reject(blog.errors);
				}
				blog.data.allContentfulBlogPost.edges.forEach((edge) => {
					createPage({
						path: edge.node.slug,
						component: blogPostTemplate,
						context: {
							slug: edge.node.slug,
						},
					});
				});
				return;
			})
		);
	});
};
