import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { colors } from '../theme/theme';
const BlogPost = ({ node }) => {
	return (
		<div>
			<MainItems>
				<Link to={node.slug}>
					<h2>{node.title}</h2>
				</Link>
				{node.tags.map((tag, idx) => {
					return <Tags key={'tags' + idx}>{tag}</Tags>;
				})}
				<Text>{node.body.childMarkdownRemark.excerpt}</Text>
				<ReadLink to={node.slug}>Read Post</ReadLink>
			</MainItems>
		</div>
	);
};

const Main = ({ data }) => {
	const pageQuery = useStaticQuery(graphql`
		query pageQuery {
			allContentfulBlogPost {
				edges {
					node {
						id
						slug
						title
						tags
						heroImage {
							resize(width: 150, height: 150) {
								src
							}
						}
						body {
							childMarkdownRemark {
								excerpt
							}
						}
					}
				}
			}
		}
	`);

	console.log(pageQuery);
	return (
		<MainWrapper>
			<MainGrid>
				<h4>Latest Blog Posts</h4>
				{pageQuery.allContentfulBlogPost.edges.map((edge, num) => (
					<BlogPost node={edge.node} key={num} />
				))}
			</MainGrid>
		</MainWrapper>
	);
};

export default Main;

const MainWrapper = styled('main')`
	background: #fff;
`;

const MainGrid = styled.div`
	@media (min-width: 960px) {
		min-width: 600px;
		width: 600px;
	}
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr;
	grid-column-gap: 20px;
	row-gap: 10px;
	& > div {
		border-bottom: 1px solid ${colors.gray300};
		padding-bottom: 10px;
	}
	h4 {
		color: ${colors.gray700};
	}
	@media (min-width: 320px) {
		& {
			margin-top: 80px;
		}
	}
`;
const MainItems = styled.div`
	img {
		border-radius: 50%;
		box-shadow: 3px 2px 11px 0px #717171;
	}
	h2 {
		color: ${colors.heading};
		font-family: sans-serif;
		font-size: 30px;
		border-radius: 5px;
		transition: all 150ms linear 0s;
		&:hover {
			background: ${colors.green600};
			color: ${colors.white};
		}
	}
	&:first-of-type {
		float: left;
		margin-right: 20px;
	}
`;

const Text = styled.p`
	color: ${colors.black700};
	font-family: sans-serif;
	font-size: 20px;
	line-height: 28px;
`;

const Tags = styled.p`
	display: inline-block;
	vertical-align: middle;
	font-size: 12px;
	margin: 0 3px;
	border-radius: 20px;
	background-color: ${colors.primary};
	color: ${colors.white};
	padding: 3px 10px;
`;

const ReadLink = styled(Link)`
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 2px;
	font-size: 14px;
	display: block;
	padding: 2px 0;
	color: ${colors.green900};
	&:hover {
		background: ${colors.green200};
	}
`;
