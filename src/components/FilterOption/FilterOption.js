import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SecondaryButton } from '../Button/Button';

const FilterOption = ({ handleChangeGender, gender }) => {
  return (
    <List>
      <ListItem>
        <SecondaryButton
          modifiers={[gender === 'all' && 'activeClass']}
          onClick={() => handleChangeGender('')}
        >
          All
        </SecondaryButton>
      </ListItem>
      <ListItem>
        <SecondaryButton
          modifiers={[gender === 'male' && 'activeClass']}
          onClick={() => handleChangeGender('male')}
        >
          Gents
        </SecondaryButton>
      </ListItem>
      <ListItem>
        <SecondaryButton
          modifiers={[gender === 'female' && 'activeClass']}
          onClick={() => handleChangeGender('female')}
        >
          Leadis
        </SecondaryButton>
      </ListItem>
    </List>
  )
};

FilterOption.propTypes = {
  handleChangeGender: PropTypes.func.isRequired,
  gender: PropTypes.string,
};

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  margin-right: 0;

  &:not(:last-of-type) {
    margin-right: .75rem;
  }
`;

export default FilterOption;