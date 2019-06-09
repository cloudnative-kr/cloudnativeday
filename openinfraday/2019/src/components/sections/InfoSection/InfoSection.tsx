import React, { FC } from 'react'
import Container, { InnerContainer } from '../../atoms/Container/Container'
import Header from '../../atoms/Header/Header'
import styled from 'styled-components/macro'
import { ON_MOBILE } from '../../../constants/responsive'

const StyledContainer = styled(Container)`
  background: #dc3b3b;
`

const Row = styled.div`
  margin-top: 50px;
`

const TopRow = styled(Row)`
  margin-top: 120px;
`

const Label = styled.div`
  text-align: right;
  font-size: 26px;
  color: white;

  @media ${ON_MOBILE} {
    font-size: 22px;
  }
`

const Line = styled.hr`
  border-top: 6px solid white;

  @media ${ON_MOBILE} {
    border-top: 4px solid white;
  }
`

const Para = styled.p`
  color: white;
  font-family: sans-serif;
  font-size: 20px;
  font-weight: 300;
  word-break: keep-all;

  strong {
    font-weight: bold;
  }

  @media ${ON_MOBILE} {
    font-size: 16px;
  }
`

const GoogleMapWrapper = styled.div`
  height: 400px;
  margin-top: 60px;
`

const InfoSection: FC = () => {
  return (
    <StyledContainer>
      <InnerContainer>
        <Header white={true}>Information</Header>
        <TopRow>
          <Label>OpenInfra Days Korea 2018</Label>
          <Line />
          <Para>
            주제 - Open Infrastructure: OpenStack, Containers, and Cloud Native
            Computing
            <br />
            주최 - OpenStack 한국 커뮤니티, OpenStack Foundation, CNCF 한국
            커뮤니티
            <br />
            주관 - OpenStack 한국 커뮤니티, CNCF 한국 커뮤니티, OpenStack
            Foundation, 정보통신산업진흥원
            <br />
          </Para>
        </TopRow>
        <Row>
          <Label>일시 및 장소</Label>
          <Line />
          <Para>
            2018년 <strong>6월 28일(목) - 29일(금)</strong> 09:00~18:00
            <br />
            코엑스 3층 컨퍼런스룸 E (구 Hall E)
          </Para>
        </Row>
        <GoogleMapWrapper>
          <iframe
            title="google"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.400950026019!2d127.05634489542675!3d37.512408109623685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2012d6bd01b%3A0x30702ebd32133065!2z7Iqk7YOA7ZWE65OcIOy9lOyXkeyKpOuqsA!5e0!3m2!1sko!2skr!4v1528983025793"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
          />
        </GoogleMapWrapper>
      </InnerContainer>
    </StyledContainer>
  )
}

export default InfoSection
