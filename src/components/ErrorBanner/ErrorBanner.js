import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { COLORS, TYPE_SCALE, WEIGHTS } from '../../constants';

const ErrorBanner = ({ description }) => {
  return (
    <Wrapper>
      <ErrorText>{description}</ErrorText>
    </Wrapper>
  )
};

ErrorBanner.propTypes = {
  description: PropTypes.string.isRequired
};

const Wrapper = styled.div`
  display: block;
  text-align: center;
  max-width: 600px;
  margin: 4rem auto;
`;

const ErrorText = styled.p`
  color: ${COLORS.black};
  font-weight: ${WEIGHTS.medium};
  font-size: ${TYPE_SCALE.header4};
`;

export default ErrorBanner;