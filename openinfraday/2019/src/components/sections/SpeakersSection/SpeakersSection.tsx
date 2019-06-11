import React, { FC } from 'react'
import styled from 'styled-components/macro'
import Container from '../../atoms/Container/Container'
import Header from '../../atoms/Header/Header'
import { Box } from '@rebass/grid'
import speakersData from '../../../data/speakers.json'
import Popup from 'reactjs-popup'
import SpeakerModal from '../../molecules/SpeakerModal/SpeakerModal'

const PROFILE_WIDTH = '250px'

const ClickForMore = styled.div`
  font-weight: bold;
  font-size: 16px;
  position: absolute;
  color: transparent;
  text-align: center;
  width: 100%;
  height: 100%;
  padding-top: 60px;
  z-index: 20;
  transition: 0.1s ease;
  &:hover,
  &:focus {
    color: white;
  }
`

const StyledContainer = styled(Container)`
  background: #242630;
`

const HeaderSection = styled.section`
  width: 100%;
  text-align: right;
  padding-right: 100px;
  margin-bottom: 50px;
`

const ContentSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  align-items: baseline;
`

const FaceWrapper = styled.div<{ width: string }>`
  width: ${p => p.width || PROFILE_WIDTH};
  position: relative;

  &:after {
    content: '\A';
    color: rgba(0, 0, 0, 0);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(37, 40, 53, 0.4);
  }

  &:hover,
  &:focus {
    &:after {
      background: rgba(30, 35, 50, 0.8);
    }
  }
`

const UserFace = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  filter: gray;
  -webkit-filter: grayscale(1);
  filter: grayscale(1);
  z-index: 20;

  &:hover,
  &:focus {
    z-index: 9;
  }
`

const ProfileCardWrapper = styled.div<{ width: string }>`
  width: ${p => p.width || '220px'};
  margin-right: 60px;
  margin-bottom: 60px;

  &:hover,
  &:focus {
    cursor: pointer;
  }

  .popup-content {
    padding: 0px !important;
    border: 0px !important;
    min-width: 400px;
  }
`

const MetaDataBox = styled.div`
  width: 100%;
  font-size: 24px;
  background: rgba(37, 40, 53, 0.5);
  padding: 10px;
  position: absolute;
  bottom: -50px;
  right: -40px;
  color: white;
  z-index: 10;
  font-family: Spoqa Han Sans;
  font-weight: bold;
  display: flex;
  flex-wrap: wrap;
`

const Affiliation = styled.div`
  font-size: 16px;
  font-weight: normal;
  color: #d94949;
`

const speakersList = speakersData.speakers

interface UserProfileCardProps {
  width: string
  image: {
    src: string
    alt: string
  }
  name: string
  affiliation: string
}

const UserProfileCard: FC<UserProfileCardProps> = ({ width, ...meta }) => (
  <ProfileCardWrapper width={width}>
    <Popup
      trigger={
        <FaceWrapper width={width}>
          <ClickForMore>Click for more!</ClickForMore>
          <UserFace src={meta.image.src} alt={meta.image.alt} />
          <MetaDataBox>
            <Box width={1}>{meta.name}</Box>
            <Box width={1}>
              <Affiliation>{meta.affiliation}</Affiliation>
            </Box>
          </MetaDataBox>
        </FaceWrapper>
      }
      modal={true}
      closeOnDocumentClick={true}
    >
      {close => <SpeakerModal close={close} {...meta} />}
    </Popup>
  </ProfileCardWrapper>
)

const SpeakerSection = () => (
  <StyledContainer>
    <HeaderSection>
      <Header white={true}>Featured Speakers</Header>
    </HeaderSection>
    <ContentSection>
      {speakersList.map(speaker => (
        <UserProfileCard key={speaker.name} width="220px" {...speaker} />
      ))}
    </ContentSection>
  </StyledContainer>
)

export default SpeakerSection
