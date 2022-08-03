import React from 'react';
import styled from 'styled-components';
import { COLORS, WEIGHTS } from '../constants';
import { LinkButton } from '../components/Button/Button';
import Navigation from '../components/Navigation/Navigation';

const NotFound = () => {
  return (
    <PageWrapper>
      <Navigation>
        <LinkButton modifiers="large" to={`/`}>Back</LinkButton>
      </Navigation>
      <SectionWrapper>
        <ErrorContent>
          <Title>404</Title>
          <SubTitle>This Page your Requested Coulf Not Found</SubTitle>
          <LinkButton modifiers="large" to={`/`}>Go Back</LinkButton>
        </ErrorContent>
      </SectionWrapper>
    </PageWrapper>
  )
};

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionWrapper = styled.section`
  background-color: ${COLORS.white};
  min-height: 60vh;
  width: 100%;
  text-align: center;
  margin-top: 2rem;
`;

const ErrorContent = styled.div`
  padding: .75rem;
`;

const Title = styled.h1`
  color: ${COLORS.primary};
  font-weight: ${WEIGHTS.bold};
  font-size: 6rem;
  margin-bottom: 1.5rem;
`;

const SubTitle = styled.h3`
  color: ${COLORS.gray[600]};
  font-weight: ${WEIGHTS.medium};
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

export default NotFound;