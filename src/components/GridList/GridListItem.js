import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { QUERIES } from '../../constants';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';

const GridListItem = ({ picture, name, id }) => {
  const fullName = `${name.first} ${name.last}`;
  return (
    <Wrapper to={`/user/${id}`}>
      <Avatar url={picture} alt={fullName} />
    </Wrapper>
  )
};

GridListItem.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
};

const Wrapper = styled(Link)`
  display: block;
  flex: 25%;
  transform:scale(1, 1);
  transition: .5s;

  &:hover {
    transform:scale(1.1, 1.1);
  }

  @media ${QUERIES.tabletOnly} {
    flex: 25%
  }

  @media ${QUERIES.tabletAndUp} {
    flex: 80px;
    width: 80px;
  }

  @media ${QUERIES.desktopAndUp} {
    flex: 120px;
    width: 120px;
  }
`;

export default GridListItem;