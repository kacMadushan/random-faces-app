import React, { useContext } from 'react';
import styled from 'styled-components';
import { COLORS } from '../constants';
import { useParams } from 'react-router-dom';
import { UsersContext } from '../utils/context/UsersContext';
import useLocalStorageState from '../utils/hooks/useLocalStorageState';
import { LinkButton } from '../components/Button/Button';
import Navigation from '../components/Navigation/Navigation';
import ProfileView from '../components/ProfileView/ProfileView';

const ProfilePage = () => {
  const { id } = useParams();
  const { results } = useContext(UsersContext);
  const [state, setState] = useLocalStorageState(id, null);

  if (!state) {
    const getProfileDetails = (results, id) => {
      const user = results.find(user => user.setId === id)
      setState(user)
    }
    return getProfileDetails(results, id)
  }

  const user = state;
  return (
    <PageWrapper>
      <Navigation>
        <LinkButton modifiers="large" to={`/`}>Back</LinkButton>
      </Navigation>
      <SectionWrapper></SectionWrapper>
      <ProfileSection>
        <ProfileView {...user} />
      </ProfileSection>
    </PageWrapper>
  )
};

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionWrapper = styled.section`
  background-color: ${COLORS.white};
  min-height: 20vh;
  width: 100%;
  margin-top: 2rem;
`;

const ProfileSection = styled.section`
  background-color: ${COLORS.secondary};
  min-height: 69vh;
  width: 100%;
`;

export default ProfilePage;