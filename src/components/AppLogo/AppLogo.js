import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { QUERIES } from '../../constants';
import Faces from '../../assets/images/Faces.png';

const AppLogo = () => {
  return (
    <LogoWrapper to={`/`}>
      <Logo src={Faces} alt="Faces" />
    </LogoWrapper>
  )
};

const LogoWrapper = styled(Link)`
  display: block;
  width: 141px;
  margin-right: .75rem;

  @media ${QUERIES.tabletAndUp} {
    width: 181px;
  }
`;

const Logo = styled.img`
  vertical-align: middle;
`;

export default AppLogo;