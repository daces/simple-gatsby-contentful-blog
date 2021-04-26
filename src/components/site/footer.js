import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { colors } from '../theme/theme';

const Footer = () => {
	return (
		<FooterWrap>
			<CopyRights>All content © Dragan Manchikj</CopyRights>
			<FooterLink to="/s">Blog</FooterLink>
			<FooterLink to="/s">About</FooterLink>
			<FooterLink to="/d">Speaking</FooterLink>
			<FooterLink to="/d">Newsletter</FooterLink>
		</FooterWrap>
	);
};
export default Footer;

const FooterWrap = styled.footer`
	text-align: center;
	margin: 50px 0 20px;
`;
const CopyRights = styled.span`
	order: 1;
	margin-right: 20px;
	font-size: 12px;
	color: ${colors.gray800};
	word-break: break-all;
`;
const FooterLink = styled(Link)`
	order: 2;
	margin-right: 20px;
	font-size: 12px;
	color: ${colors.gray800};
`;
