import React from 'react';
import styled from 'styled-components';
import { QUERIES } from '../../constants';
import AppLogo from '../AppLogo/AppLogo';

const Navigation = ({ children }) => {
  return (
    <MainHeader>
      <AppLogo />
      {children}
    </MainHeader>
  )
};

const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem .75rem;
  box-shadow: 0 2px 18px -1px rgb(32 32 37 / 15%);

  @media ${QUERIES.tabletAndUp} {
    padding: 1.5rem 2.5rem;
  }
`;

export default Navigation;