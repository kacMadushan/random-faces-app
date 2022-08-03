import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import {
  PRIMARY_FONT,
  TYPE_SCALE,
  WEIGHTS,
  COLORS,
} from '../../constants';

// app global styles
const GlobalStyles = createGlobalStyle`
  ${normalize()}

  html {
    box-sizing: border-box
  }

  html, body {
    height: 100%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background-color: ${COLORS.white};
    color: ${COLORS.gray[600]};
    font-weight: ${WEIGHTS.normal};
    font-size: ${TYPE_SCALE.paragraph};
    font-family: ${PRIMARY_FONT};
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    vertical-align: middle;
  }
`;

export default GlobalStyles;