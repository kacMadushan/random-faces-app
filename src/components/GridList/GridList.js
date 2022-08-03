import React, { useContext } from 'react';
import styled from 'styled-components';
import { UsersContext } from '../../utils/context/UsersContext';
import GridListItem from './GridListItem';

const GridList = () => {
  const { results } = useContext(UsersContext);
  const users = results ? results : null;
  const gridListItemElement = users.map(({ setId, picture, name }) => (
    <GridListItem
      key={setId}
      id={setId}
      picture={picture.large}
      name={name}
    />
  ));
  return (
    <Wrapper>
      {gridListItemElement}
    </Wrapper>
  )
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: .75rem;
`;

export default GridList;