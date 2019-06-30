import React, { FC } from 'react'
import styled from 'styled-components/macro'
import { ON_MOBILE, ON_TABLET } from 'constants/responsive'
import { CloseO } from 'styled-icons/evil/CloseO'
import { Flex, Box } from '@rebass/grid'
import SampleImg from 'speakers/cho.jpg'

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 600px;
  min-width: 1100px;

  background-color: #2f323e;

  @media ${ON_MOBILE} {
    width: 100%;
    height: 100vh;
    min-height: 500px;
    min-width: 310px;
  }
`

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 900px;
  margin: auto;
  line-height: 1.3;
  letter-spacing: -0.5px;
  padding: 50px 0 60px 0;

  @media ${ON_TABLET} {
    min-width: 310px;
    padding: 50px 15px;
  }
`

const CloseButton = styled(CloseO)`
  cursor: pointer;
  position: absolute;
  display: block;
  height: 60px;
  line-height: 20px;
  margin-right: 10px;
  margin-top: 10px;
  right: 0px;
  top: 0px;
  @media ${ON_TABLET} {
    height: 40px;
    margin-right: 5px;
    margin-top: 5px;
  }
  &:hover,
  &:focus {
    color: lightblue;
  }
`

const SectionRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 40px;
`

const Title = styled.div`
  max-width: 700px;
  font-size: 30px;
  font-weight: bold;
`

const SpeakerRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  margin-bottom: 10px;
`

const SpeakerInfoRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding-bottom: 20px; */
`

const SpeakerName = styled.div`
  font-size: 22px;
  width: 100%;
  font-weight: bold;
  @media ${ON_MOBILE} {
    font-size: 17px;
    font-weight: bold;
  }
`

const SpeakerImage = styled.div<{ src: string }>`
   width: 110px;
  height: 110px;
  border-radius: 50%;
  margin-right: 20px;

  background: url('${p => p.src}') no-repeat center center;
  background-size: cover;

  @media ${ON_MOBILE} {
    width: 70px;
    height: 70px;
    margin-right: 10px;
  }


`

const SpeakerAffiliation = styled.div`
  width: 100%;
  color: #f74c4f;
  /* font-weight: bold; */
  font-size: 17px;
  @media ${ON_MOBILE} {
    font-size: 13px;
    /* font-weight: bold; */
  }
`
const SpeakerDescription = styled.div`
  width: 100%;
  font-size: 15px;
  margin-top: 10px;
  letter-spacing: 0.2px;
  white-space: pre-line;

  @media ${ON_MOBILE} {
    font-size: 13px;
  }
`

const TrackInfoRow = styled.div`
  display: inline-flex;
  margin-top: 5px;
`

const Track = styled.div`
  padding: 0 6px;
  border-radius: 1px;
  font-weight: bold;
  font-size: 17px;
  background: rgb(244, 160, 122);
  margin-right: 7px;
  color: #2f323e;
  @media ${ON_MOBILE} {
    font-size: 13px;
  }
`

const SpeakerDeck = styled.a`
  text-decoration: none;
  margin-left: auto;
  padding: 0 7px;
  font-weight: bold;
  border-radius: 2px;
  font-size: 17px;
  color: white;
  background: #f74c4f;

  &:hover,
  &:focus {
    cursor: pointer;
  }
  @media ${ON_MOBILE} {
    font-size: 13px;
  }
`

const TrackDescription = styled.div`
  width: 100%;
  font-size: 15px;
  margin-top: 10px;
  border-top: 4px solid white;
  padding-top: 10px;
  letter-spacing: 0.2px;
  white-space: pre-line;

  @media ${ON_MOBILE} {
    font-size: 13px;
  }
`

const SpeakerBox = styled(Box)`
  border-left: 2px solid white;
  padding-left: 10px;
  padding-right: 30px;
`

interface ISpeaker {
  name: string
  affiliation: string
  bio: string
  imageUrl?: string
}

interface ScheduleSession {
  title: string
  time: string
  tracks: string[]
  deckUrl?: string
  videoUrl?: string
  description: string
  speakerDetails?: ISpeaker[]
}

function chooseRandProfilePic() {
  const value = Math.floor(Math.random() * 3)
  switch (value) {
    case 0:
      return '1.jpg'
    case 1:
      return '2.png'
    case 2:
      return '3.jpg'
    default:
      return '1.jpg'
  }
}

interface ScheduleModalProps {
  close: () => void
  session: ScheduleSession
}

const ScheduleModal: FC<ScheduleModalProps> = ({
  session: {
    title,
    time,
    tracks,
    deckUrl,
    videoUrl,
    description,
    speakerDetails,
  },
  close,
}) => (
  <ModalWrapper>
    <CloseButton onClick={close} />
    <ContentWrapper>
      <Flex flexWrap="wrap">
        <SectionRow>
          <Title>{title}</Title>
          <TrackInfoRow>
            <Track>{time}</Track>
            {tracks &&
              tracks.length > 0 &&
              tracks.map(track => <Track>{track}</Track>)}
            {deckUrl && (
              <SpeakerDeck href={deckUrl} target="_blank">
                발표자료
              </SpeakerDeck>
            )}
            {videoUrl && (
              <SpeakerDeck href={deckUrl} target="_blank">
                영상자료
              </SpeakerDeck>
            )}
          </TrackInfoRow>
          <TrackDescription>{description}</TrackDescription>
        </SectionRow>
        <SectionRow>
          <Title>Speakers</Title>
        </SectionRow>
        {speakerDetails &&
          speakerDetails.length > 0 &&
          speakerDetails.map(speaker => (
            <SpeakerBox width={[1, 1, 1 / 2]}>
              <SpeakerRow>
                <SpeakerImage
                  src={speaker.imageUrl || `random/${chooseRandProfilePic()}`}
                />
                <SpeakerInfoRow>
                  <SpeakerName>{speaker.name}</SpeakerName>
                  <SpeakerAffiliation>{speaker.affiliation}</SpeakerAffiliation>
                </SpeakerInfoRow>
              </SpeakerRow>
              <SpeakerDescription>{speaker.bio}</SpeakerDescription>
            </SpeakerBox>
          ))}
      </Flex>
    </ContentWrapper>
  </ModalWrapper>
)

// const ScheduleModal = ({ close }: { close: any }) => (
//   <>
//     <ModalWrapper>
//       <CloseButton onClick={close} />
//       <ContentWrapper>
//         {/* <CloseButton /> */}
//         <Flex flexWrap="wrap">
//           <SectionRow>
//             <Title>Opening & OpenInfra Days Korea 2019 프로그램 소개</Title>
//             <TrackInfoRow>
//               <Track>4:00 pm</Track>
//               <Track>Track 1</Track>
//               <SpeakerDeck>발표자료</SpeakerDeck>
//             </TrackInfoRow>
//             <TrackDescription>
//               고가용성, 저비용, 유연하게 확장 가능한 인프라 그리고 빠른 서비스
//               딜리버리를 가능하게하기 위한 인프라의 중요성은 갈수록 증가 하고
//               있습니다. IaaS, PaaS, CaaS, SDS 영역에서 SUSE에서 서포트하는
//               프로젝트인 OpenStack, Cloud Foundry, Kubernetes, Ceph 등의
//               오픈소스 프로젝트를 활용한 SUSE의 인프라 구축/운영 전략, 사용하는
//               기술스택, 사례 그리고 HPE와의 파트너쉽을 소개 합니다.
//             </TrackDescription>
//           </SectionRow>
//           <SectionRow>
//             <Title>Speaker</Title>
//           </SectionRow>
//           <SpeakerBox width={[1, 1, 1 / 2]}>
//             <SpeakerRow>
//               <SpeakerImage src="speakers/cho.jpg" />
//               <SpeakerInfoRow>
//                 <SpeakerName>김정수</SpeakerName>
//                 <SpeakerAffiliation>
//                   OpenStack Korea User Group
//                 </SpeakerAffiliation>
//               </SpeakerInfoRow>
//             </SpeakerRow>
//             <SpeakerDescription>
//               2007년부터 개발, 보안, 시스템 엔지니어링 등의 분야에서 경험을 쌓아
//               왔으며, 2015년도에 SUSE Korea에 입사하여 Technical Specialist로서
//               High Available하고 Scalable한 인프라를 소개 및 구축 하는 일을
//               담당하고 있습니다.
//             </SpeakerDescription>
//           </SpeakerBox>
//           <SpeakerBox width={[1, 1, 1 / 2]}>
//             <SpeakerRow>
//               <SpeakerImage src="speakers/cho.jpg" />
//               <SpeakerInfoRow>
//                 <SpeakerName>김정수</SpeakerName>
//                 <SpeakerAffiliation>
//                   OpenStack Korea User Group
//                 </SpeakerAffiliation>
//               </SpeakerInfoRow>
//             </SpeakerRow>
//             <SpeakerDescription>
//               2007년부터 개발, 보안, 시스템 엔지니어링 등의 분야에서 경험을 쌓아
//               왔으며, 2015년도에 SUSE Korea에 입사하여 Technical Specialist로서
//               High Available하고 Scalable한 인프라를 소개 및 구축 하는 일을
//               담당하고 있습니다.
//             </SpeakerDescription>
//           </SpeakerBox>
//         </Flex>
//       </ContentWrapper>
//     </ModalWrapper>
//   </>
// )

export default ScheduleModal
