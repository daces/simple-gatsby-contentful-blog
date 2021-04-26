import React from 'react';
import { Global, css } from '@emotion/react';
import { colors } from '../theme/theme';
const GlobalCss = () => {
	return (
		<>
			<Global
				styles={css`
					html {
						background: ${colors.white};
						font-family: sans-serif;
					}
					html,
					body {
						padding 0;
						margin: 0px auto;
						max-width: 90%;
						min-height: 100vh;
					}
					a {
						text-decoration: none;
					}
				`}
			/>
		</>
	);
};
export default GlobalCss;
