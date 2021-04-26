import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/SEO';

import Header from '../components/site/header';
import Footer from '../components/site/footer';
import styled from 'styled-components';

class BlogPost extends Component {
	render() {
		const { title, slug, body, heroImage } = this.props.data.contentfulBlogPost;

		return (
			<>
				<Layout />
				<Seo
					title={title}
					url={slug}
					description={body.childMarkdownRemark.excerpt}
					image={heroImage.fluid.src}
					isBlogPost={true}
				/>
				<Header />
				<Article>
					<h1>{title}</h1>
					<div dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />
				</Article>
				<Footer />
			</>
		);
	}
}

BlogPost.propTypes = {
	data: PropTypes.object.isRequired,
	name: PropTypes.string,
};

export default BlogPost;

export const pageQuery = graphql`
	query blogPostQuery($slug: String!) {
		contentfulBlogPost(slug: { eq: $slug }) {
			title
			slug
			body {
				childMarkdownRemark {
					html
					excerpt
				}
			}
			heroImage {
				fluid {
					src
				}
			}
		}
	}
`;

const Article = styled.article`
	max-width: 600px;
	margin: 0 auto;
	font-family: sans-serif;
	font-size: 20px;
	line-height: 31px;
	@media (min-width: 320px) {
		& {
			margin-top: 80px;
		}
	}
`;
