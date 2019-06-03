import * as React from 'react'
import styled from 'styled-components'
import { Title, IconRow, Icon } from './templates/SectionTemplate'

const Wrapper = styled.div`
  width: 100%;
  background: url('venue-bg.png') no-repeat center center;
  background-size: cover;
  padding: 40px 0;
  display: flex;
  justify-content: center;
`

const Card = styled.div`
  display: inline-block;
  width: 100%;
  max-width: 500px;
  margin-left: 25px;
  margin-right: 25px;
  background: white;
  box-shadow: 1px 1px 8px rgba(32, 32, 47, 0.16);
  padding-top: 30px;
  padding-bottom: 40px;
  text-align: center;
`

const Location = styled.div`
  a {
    font-size: 18px;
    font-weight: bold;
    color: #6b7584;
    text-decoration: none;
  }
`

const Address = styled.div`
  font-size: 16px;
  font-weight: 300;
  margin-top: 30px;
  color: #6b7584;
`

const LocationSection: React.StatelessComponent<{}> = () => (
  <Wrapper>
    <Card>
      <IconRow>
        <Icon className="fa fa-calendar fa-2x" aria-hidden="true" />
      </IconRow>
      <Title>위치</Title>
      <Location>
        <a target="_blank" href="https://goo.gl/maps/bGuovKiiUJP2">
          <span className="fa fa-external-link" /> 한국 Microsoft 11층
          <br />
          (광화문 더케이트윈타워 A동)
        </a>
      </Location>
      <Address>서울특별시 종로구 중학동 종로 1길 50</Address>
    </Card>
  </Wrapper>
)

export default LocationSection
