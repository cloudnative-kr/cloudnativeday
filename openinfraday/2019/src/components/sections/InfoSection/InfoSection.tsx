import React, { FC } from 'react'
import Container, { InnerContainer } from '../../atoms/Container/Container'
import Header from '../../atoms/Header/Header'
import styled from 'styled-components/macro'
import { ON_MOBILE } from '../../../constants/responsive'

const StyledContainer = styled(Container)`
  background: #dc3232;
`

const Row = styled.div`
  margin-top: 40px;
`

const TopRow = styled(Row)`
  margin-top: 120px;

  @media ${ON_MOBILE} {
    margin-top: 80px;
  }
`

const Label = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: white;

  @media ${ON_MOBILE} {
    font-size: 14px;
  }
`

const Line = styled.hr`
  margin-top: 40px;
  border-top: 6px solid white;

  @media ${ON_MOBILE} {
    border-top: 4px solid white;
  }
`

const Para = styled.p`
  color: white;
  font-family: sans-serif;
  font-size: 22px;
  font-weight: 600;
  word-break: keep-all;
  margin-top: 6px;

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
          <Label>부제</Label>
          <Para>Open & Intelligent Infrastructure</Para>
        </TopRow>
        <Row>
          <Label>주최</Label>
          <Para>
            OpenStack 한국 커뮤니티
            <br />
            OpenStack Foundation
            <br />
            CNCF 한국 커뮤니티
            <br />
            Ceph 한국커뮤니티
          </Para>
        </Row>
        <Row>
          <Label>주관</Label>
          <Para>
            OpenStack 한국 커뮤니티
            <br />
            CNCF 한국 커뮤니티
            <br />
            OpenStack Foundation
            <br />
            정보통신산업진흥원
          </Para>
        </Row>
        <Line />
        <Row>
          <Label>일시 및 장소</Label>
          <Para>
            2019년 <strong>7월 18일(목) - 19일(금)</strong> 09:00~18:00
            <br />
            페럼타워, 삼화타워, T타워 (을지로입구)
          </Para>
        </Row>
        <GoogleMapWrapper>
          <iframe
            title="google"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2045.8915763695397!2d126.98480390590787!3d37.56696928999183!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc4e8b08386639fe1!2zRmVycnVtIFRvd2VyICjtjpjrn7wg7YOA7JuMKQ!5e0!3m2!1sen!2skr!4v1560367089994!5m2!1sen!2skr"
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
