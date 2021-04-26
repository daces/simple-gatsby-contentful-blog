import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import logo from '../../../public/static/logo.png';
import { colors } from '../theme/theme';
const Navi = () => {
	return (
		<Nav>
			<Link to="/">
				<Logo src={logo} />
			</Link>

			<Link to="/s">Blog</Link>
			<Link to="/s">About</Link>
			<Link to="/d">Speaking</Link>
			<Link to="/d">Newsletter</Link>
		</Nav>
	);
};

export default Navi;

const Nav = styled.nav`
	text-transform: uppercase;
	padding: 10px 0;
	border-bottom: 1px solid ${colors.gray300};
	position: absolute;
	top: 0;
	left: 0;
	z-index: 34333;
	background: white;
	display: block;
	width: 100%;
	a:first-of-type {
		margin-left: 20px;
		order: 1;
	}
	a {
		color: ${colors.black700};
		margin: 0 2px;
		padding: 20px 15px;
		font-weight: bold;
		transition: all 150ms linear 0s;
		order: 2;
	}
	a:hover {
		color: ${colors.green600};
	}
	@media (min-width: 320px) {
		a {
			font-size: 12px;
			padding: 10px 3px;
		}
		a:first-of-type {
			margin-left: 0px;
			order: 1;
		}
	}
`;
const Logo = styled.img`
	vertical-align: middle;
	margin-left: 10px;
	order: 1;
`;
