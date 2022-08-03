import React, { useContext } from 'react';
import uuid from 'uuid';
import styled from 'styled-components';
import { WEIGHTS, TYPE_SCALE, QUERIES } from '../constants';
import { UsersContext } from '../utils/context/UsersContext';
import { PrimaryButton } from '../components/Button/Button';
import Spinner from '../components/Spinner/Spinner';
import ErrorBanner from '../components/ErrorBanner/ErrorBanner'
import Navigation from '../components/Navigation/Navigation';
import FilterOption from '../components/FilterOption/FilterOption';
import GridList from '../components/GridList/GridList';

const HomePage = () => {
  const {
    loading,
    results,
    error,
    gender,
    setGender,
    setUrl
  } = useContext(UsersContext);

  const handleGenerateUsers = () => {
    const randomSeed = uuid();
    const query = `seed=${randomSeed}`;
    setUrl(query)
  }

  const handleChangeGender = (name) => {
    if (name) {
      const query = `gender=${name}`;
      setUrl(query);
      setGender(name);
    } else {
      setUrl(null);
      setGender('all')
    }
  }

  if (error) {
    return (
      <ErrorBanner description={error} />
    )
  }

  const renderGridElement =
    loading
      ? (<Spinner />) :
      (
        <>
          <SectionHeader>
            <SectionTitle>
              {results.length} new faces
            </SectionTitle>
            <FilterOption
              gender={gender}
              handleChangeGender={handleChangeGender}
            />
          </SectionHeader>
          <SectionBody>
            <GridList />
          </SectionBody>
        </>
      )
  return (
    <>
      <Navigation>
        <PrimaryButton
          modifiers="large"
          onClick={handleGenerateUsers}
        >
          Generate Users
        </PrimaryButton>
      </Navigation>
      <SectionWrapper>
        {renderGridElement}
      </SectionWrapper>
    </>
  )
};

const SectionWrapper = styled.section`
  padding: .75rem;

  @media ${QUERIES.tabletAndUp} {
    padding: 1.5rem 2.5rem;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const SectionTitle = styled.h3`
  font-weight: ${WEIGHTS.bold};
  font-size: ${TYPE_SCALE.header2};
  margin-bottom: 1rem;
`;

const SectionBody = styled.div`
  display: flex;
`;

export default HomePage;