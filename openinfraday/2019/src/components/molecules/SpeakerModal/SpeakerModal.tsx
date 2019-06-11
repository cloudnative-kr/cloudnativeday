import React, { FC } from 'react'
import styled from 'styled-components/macro'
import { Box, Flex } from '@rebass/grid'
import { ON_MOBILE } from '../../../constants/responsive'

const Line = styled.hr<{ width?: string }>`
  border-top: 3px solid white;
  margin-right: auto;
  margin-left: 0;
  width: ${p => p.width || 'unset'};

  @media ${ON_MOBILE} {
    border-top: 2px solid white;
  }
`

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #2f323e;
  min-height: 300px;
  /* min-width: 400px; */
`

const CloseButton = styled.a`
  cursor: pointer;
  position: absolute;
  display: block;
  padding: 10px 15px;
  line-height: 20px;
  right: 0px;
  top: 0px;
  font-size: 24px;
  background: #706969;
  color: #fff;
  /* border-radius: 18px; */
  /* border: 1px solid #cfcece; */
`

const ModalImage = styled.img`
  display: block;
  position: absolute;
  width: auto;
  height: 200px;
  left: -35px;
  top: -35px;
  filter: gray;
  -webkit-filter: grayscale(1);
  filter: grayscale(1);
  z-index: 20;

  &:after {
    content: '\A';
    position: absolute;
    background: rgba(37, 40, 53, 0.6);
  }
`

const NameLabel = styled.div`
  margin-top: -5px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  width: 100%;
  /* margin: 200px 0 10px 80px; */
`

const Affiliation = styled.div`
  font-size: 18px;
  font-weight: bold;
  line-height: 1;
  color: #d94949;
  width: 100%;
  margin: 10px 0 10px 0;
`

const Label = styled.div`
  margin-bottom: -5px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  width: 100%;
`

const Content = styled.div`
  font-size: 14px;
  color: white;
  margin-bottom: 30px;
`

interface SpeakerModalProps {
  image: { src: string; alt: string }
  name: string
  affiliation: string
  about?: string
  keynote?: string
  close: () => void
}

const SpeakerModal: FC<SpeakerModalProps> = ({
  image,
  name,
  affiliation,
  about,
  keynote,
  close,
}) => (
  <ModalWrapper>
    <CloseButton
      onClick={() => {
        close()
      }}
    >
      x
    </CloseButton>
    <Flex flexWrap="wrap">
      <Box pt={190} pl={30} pr={10} width={[1, 1, 1 / 2, 3 / 10]}>
        <ModalImage alt={image.alt} src={image.src} />
        <Line width="60px" />
        <NameLabel>{name}</NameLabel>
        <Affiliation>{affiliation}</Affiliation>
      </Box>
      <Box pt={20} pl={10} pr={15} width={[1, 1, 1 / 2, 7 / 10]}>
        <Label>발표자 소개</Label>
        <Line width="93px" />
        <Content>{about}</Content>
        <Label>발표 요약</Label>
        <Line width="75px" />
        <Content>{keynote}</Content>
      </Box>
    </Flex>
  </ModalWrapper>
)

export default SpeakerModal
