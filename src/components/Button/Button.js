import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { Link } from 'react-router-dom';
import {
  COLORS,
  WEIGHTS,
  PRIMARY_FONT,
  TYPE_SCALE
} from '../../constants';

export const BUTTON_MODIFIERS = {
  small: () => `
    padding: .25rem .5rem;
    font-size: ${TYPE_SCALE.text};
  `,
  large: () => `
    padding: .75rem 1rem;
    font-size: ${TYPE_SCALE.paragraph};
  `,
  block: () => `
    display: block;
    width: 100%;
  `,
  activeClass: () => `
    background-color: ${COLORS.secondary};
    border: 1px solid ${COLORS.primary};
    color: ${COLORS.primary};
  `,
};

export const Button = styled.button`
  color: ${COLORS.primary};
  min-width: 100px;
  border: 0;
  padding: .5rem 1rem;
  text-align: center;
  font-weight: ${WEIGHTS.medium};
  font-size: ${TYPE_SCALE.paragraph};
  font-family: ${PRIMARY_FONT};
  line-height: 1.6;
  text-transform: uppercase;
  transition: background-color 0.2s linear, color 0.2s linear;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.primary};
    color: ${COLORS.white};
  }

  &:focus {
    outline: 3px solid ${props => props.theme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${COLORS.primary};
    border-color: ${COLORS.primary};
    color: ${COLORS.white};
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};

  &:hover {
    background-color: ${COLORS.urgent};
  }

  &:focus {
    outline: 3px solid ${COLORS.urgent};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: .65;
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  background: none;
  color: ${COLORS.primary};
  border-radius: 1.5rem;
  border: 1px solid ${COLORS.gray[400]};

  &:hover {
    background-color: ${COLORS.secondary};
    border: 1px solid ${COLORS.primary};
    color: ${COLORS.primary};
  }

  &:focus {
    background-color: ${COLORS.secondary};
    border: 1px solid ${COLORS.primary};
    color: ${COLORS.primary};
  }

  &:active {
    background-color: ${COLORS.secondary};
    border: 1px solid ${COLORS.secondary};
    color: ${COLORS.primary};
  }

  &:disabled {
    opacity: .65;
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const LinkButton = styled(Link)`
  background-color: ${COLORS.white};
  color: ${COLORS.primary};
  border: 2px solid ${COLORS.primary};
  border-radius: 3px;
  padding: .5rem 1rem;
  text-align: center;
  text-transform: uppercase;
  line-height: 1.6;
  font-weight: ${WEIGHTS.medium};
  font-size: ${TYPE_SCALE.paragraph};
  font-family: ${PRIMARY_FONT};
  min-width: 100px;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.primary};
    border: 1px solid ${COLORS.primary};
    color: ${COLORS.white};
  }

  &:focus {
    outline: 3px solid ${COLORS.primary};
    outline-offset: 2px;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;