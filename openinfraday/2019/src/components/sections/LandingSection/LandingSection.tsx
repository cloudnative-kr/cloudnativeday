import React, { FC } from 'react'
import styled from 'styled-components/macro'
import { ON_MOBILE } from '../../../constants/responsive'
import OpenInfraDayLogo from '../../../assets/OpenInfra_White.png'
// import Countdown from 'react-countdown-now'
import { Box } from '@rebass/grid'

const Wrapper = styled.div`
  text-align: center;
  background: url('/backgrounds/background.jpg') no-repeat center center;
  background-size: cover;
  padding-top: 62px;
  padding-bottom: 200px;
  background-color: rgba(0, 0, 0, 0.5);
`

// const Logo = styled.img`
//   margin-top: 100px;
//   width: 125px;
// `

const Title = styled.h1`
  max-width: 730px;
  margin-top: 140px;
  margin-left: auto;
  margin-right: auto;
  /* border: 3px solid white; */
  padding: 20px 40px;
  font-family: 'Montserrat';
  line-height: 1;
  color: #e3f3f8;
  font-weight: 800;
  font-size: 50px;

  @media ${ON_MOBILE} {
    border: none;
    padding: 0;
    font-size: 40px;
  }
`

const SubTitle = styled.p`
  font-size: 18px;
  margin-top: 20px;
  color: white;
  font-weight: 300;
  color: #e3f3f8;

  @media ${ON_MOBILE} {
    white-space: pre-line;
    font-size: 12px;
  }
`

const Organizers = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-items: center;
`

const OrganizerLabel = styled.div`
  margin-bottom: 10px;
  font-size: 17px;
  font-weight: bold;
  color: #e3f3f8;
  width: 100%;
  font-family: Spoqa Han Sans;
`

const TextLogo = styled.div`
  height: 150px;
  width: 200px;
  font-size: 50px;
  color: white;
  letter-spacing: -5px;
  font-weight: bolder;
  line-height: 1.1;
`

const OrganizerLogos = styled.img`
  /* max-width: 100%;
  height: 100px; */

  max-height: 100%;
  width: 10em;
  margin: 2em 3em 3em 3em;
`

// const CountdownWrapper = styled.div`
//   margin-left: auto;
//   margin-right: auto;
//   margin-bottom: 50px;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   * {
//     color: #e3f3f8;
//   }
// `

// const CountNumber = styled.div`
//   width: 25%;
//   font-size: 50px;
//   font-family: 'Montserrat';
//   font-weight: bold;
//   margin: 5px 20px 5px 20px;
//   @media ${ON_MOBILE} {
//     margin: 5px 11px 5px 11px;
//     font-size: 45px;
//   }
// `

// const CountElement = styled.div`
//   font-size: 20px;
// `

// const EventCountDown = ({ days, hours, minutes, seconds, completed }) => (
//   <CountdownWrapper>
//     {completed ? (
//       <span>시작 합니다!</span>
//     ) : (
//       <Flex>
//         <CountNumber>
//           {days}
//           <br />
//           <CountElement>days</CountElement>
//         </CountNumber>
//         <CountNumber>
//           {hours}
//           <br />
//           <CountElement>hours</CountElement>
//         </CountNumber>
//         <CountNumber>
//           {minutes}
//           <br />
//           <CountElement>mins</CountElement>
//         </CountNumber>
//         <CountNumber>
//           {seconds}
//           <br />
//           <CountElement>secs</CountElement>
//         </CountNumber>
//       </Flex>
//     )}
//   </CountdownWrapper>
// )

const LandingSection: FC = () => (
  <Wrapper>
    {/* <Logo src={OpenInfraDayLogo} /> */}
    <Title>Open Infrastructure & Cloud Native Days Korea 2019</Title>
    <SubTitle>
      July 18-19, 2019. 9:00AM - 6:00PM
      <br />
      페럼타워, 삼화타워, T타워 (을지로입구)
    </SubTitle>
    {/* <Countdown date="28 June 2019 09:00:00" renderer={EventCountDown} /> */}
    <Organizers>
      <OrganizerLabel>- Hosted By -</OrganizerLabel>
      <Box width={1}>
        <TextLogo>국내 오픈소스 커뮤니티</TextLogo>
        <OrganizerLogos src="logos/KoreaUserGroup.png" />
        {/* <OrganizerLogos src="logos/Openstack.png" /> */}
        <OrganizerLogos src="logos/CNCK.png" />
      </Box>
    </Organizers>
    <Organizers>
      <OrganizerLabel>-Organized By-</OrganizerLabel>
      <Box width={1}>
        <OrganizerLogos src="logos/KoreaUserGroup.png" />
        <OrganizerLogos src="logos/Openstack.png" />
        <OrganizerLogos src="logos/NIPA.png" />
      </Box>
    </Organizers>
  </Wrapper>
)

export default LandingSection
