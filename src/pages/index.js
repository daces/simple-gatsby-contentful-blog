import React from 'react';

import Layout from '../components/layout';
import Seo from '../components/SEO';
import Header from '../components/site/header';
import Main from '../components/site/main';
import Footer from '../components/site/footer';

const IndexPage = ({ children }) => {
	return (
		<>
			<Layout />
			<Seo />
			<Header key="app-header" />
			<Main key="app-main" className="main" />
			<Footer key="app-footer" />
		</>
	);
};

export default IndexPage;
