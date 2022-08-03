import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaEnvelopeOpen, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { COLORS, TYPE_SCALE, WEIGHTS, QUERIES } from '../../constants';
import Avatar from '../Avatar/Avatar';

const ProfileView = ({ picture, name, location, phone, email }) => {
  const fullName = name.first + ' ' + name.last;
  const country = location.country;
  return (
    <Wrapper>
      <AvatarWrapper>
        <Avatar
          modifiers={['circle']}
          url={picture.large}
          alt={fullName}
        />
      </AvatarWrapper>
      <UserInfo>
        <UserName>{fullName}</UserName>
        <InfoList>
          <InfoListItem>
            <IconRound>
              <FaEnvelopeOpen />
            </IconRound>
            <IconLabel>{email}</IconLabel>
          </InfoListItem>
          <InfoListItem>
            <IconRound>
              <FaMapMarkerAlt />
            </IconRound>
            <IconLabel>{country}</IconLabel>
          </InfoListItem>
          <InfoListItem>
            <IconRound>
              <FaPhoneAlt />
            </IconRound>
            <IconLabel>{phone}</IconLabel>
          </InfoListItem>
        </InfoList>
      </UserInfo>
    </Wrapper>
  )
};

ProfileView.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.object.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired
};

const Wrapper = styled.div`
  text-align: center;
  max-width: 840px;
  margin: 0 auto;
`;

const AvatarWrapper = styled.div`
  background-color: ${COLORS.tertiary};
  border-radius: 50%;
  padding: .625rem;
  margin-top: -5rem;
  margin-left: auto;
  margin-right: auto;
  width: 170px;
  height: 170px;

  @media ${QUERIES.tabletOnly} {
    margin-top: -3rem;
    width: 170px;
    height: 170px;
  }

  @media ${QUERIES.tabletAndUp} {
    margin-top: -5rem;
    padding: .625rem;
    width: 170px;
    height: 170px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-top: -10rem;
    padding: 1.25rem;
    width: 340px;
    height: 340px;
  }
`;

const UserInfo = styled.div`
  text-align: center;
`;

const UserName = styled.h3`
  color: ${COLORS.black};
  font-weight: ${WEIGHTS.bold};
  font-size: ${TYPE_SCALE.header3};
  margin-bottom: 1rem;
`;

const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: start;
  margin-top: 2rem;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
  }
`;

const InfoListItem = styled.li`
  margin-right: 0;
  margin-bottom: 1.5rem;

  &:not(:last-of-type) {
    margin-right: 1.5rem;
  }
`;

const IconRound = styled.div`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  font-size: 1rem;
  padding: .625rem 0;
  margin-right: .75rem;
  margin-bottom: .75rem;
  width: 38px;
  height: 38px;

  @media ${QUERIES.tabletOnly} {
    display: block;
    margin-left: auto;
    margin-right: auto;
  } 
`;

const IconLabel = styled.span`
  color: ${COLORS.black};
  font-weight: ${WEIGHTS.medium};
  font-size: ${TYPE_SCALE.header5};
`;

export default ProfileView;