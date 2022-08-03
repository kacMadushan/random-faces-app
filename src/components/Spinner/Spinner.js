import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  borderColor: `${COLORS.primary}`,
};

const Spinner = () => {
  return (
    <Wrapper>
      <ClipLoader
        unitsize={"px"}
        size={80}
        loading={true}
        cssOverride={override}
      />
    </Wrapper>
  )
};

const Wrapper = styled.div`
  display: block;
  text-align: center;
  max-width: 600px;
  margin: 4rem auto;
`;

export default Spinner;