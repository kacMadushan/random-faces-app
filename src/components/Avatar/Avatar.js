import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

const Avatar = ({ url, alt, modifiers }) => {
  return (
    <Image modifiers={modifiers} src={url} alt={alt} />
  )
};

Avatar.propTypes = {
  modifiers: PropTypes.string,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string
};

const IMAGE_MODIFIER = {
  small: () => `
    width: 48px;
    height: 48px;
  `,
  medium: () => `
    width: 64px;
    height: 64px
  `,
  rounded: () => `
    border-radius: 5px;
  `,
  circle: () => `
    border-radius: 50%;  
  `,
}

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;

  ${applyStyleModifiers(IMAGE_MODIFIER)}
`;

export default Avatar;