import * as React from 'react'
import { StatelessComponent } from 'react'
import styled from 'styled-components'
import SectionTemplate from './templates/SectionTemplate'

const Wrapper = styled.div`
  max-width: 900px;
  margin: auto;
`

const Row = styled.div`
  &:not(:first-child) {
    margin-top: 30px;
    border-top: 1px solid #e8e8e8;
    padding-top: 20px;
  }
`

const Time = styled.div`
  font-size: 22px;
  font-weight: 400;
  padding-left: 15px;
  color: #4a4a4a;
  margin-bottom: 5px;
`

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
`

const Card = styled.div`
  min-width: 200px;
  box-shadow: 1px 1px 5px #bdbdbd;
  background-color: white;
  margin: 12px 15px;
  /* text-align: center; */
  flex-grow: 1;
`

interface HeaderProps {
  backgroundColor?: string
}

// #7d0151 보라색
const Header = styled.div`
  background-color: ${(p: HeaderProps) => p.backgroundColor || '#4e4e4e'};
  padding: 10px 20px;
  color: white;
  font-size: 14px;
`

const Body = styled.div`
  padding: 28px 20px;
  font-size: 17px;
`

interface ItemProps {
  track: string
  room: string
  backgroundColor?: string
}

const Item: StatelessComponent<ItemProps> = ({
  track,
  room,
  children,
  backgroundColor
}) => (
  <Card>
    <Header backgroundColor={backgroundColor}>
      {track}
      <br />
      {room}
    </Header>
    <Body>{children}</Body>
  </Card>
)

const Track1: StatelessComponent = ({ children }) => (
  <Item track="Track Ⅰ" room="11층 A" backgroundColor="#d65a5a">
    {children}
  </Item>
)

const Track2: StatelessComponent = ({ children }) => (
  <Item track="Track Ⅱ" room="11층 B" backgroundColor="#e88c55">
    {children}
  </Item>
)

const Track3: StatelessComponent = ({ children }) => (
  <Item track="Track Ⅲ" room="11층 C" backgroundColor="#478a49">
    {children}
  </Item>
)

const Track4: StatelessComponent = ({ children }) => (
  <Item track="Track IV" room="11층 D" backgroundColor="#002f9a">
    {children}
  </Item>
)

const Track5: StatelessComponent = ({ children }) => (
  <Item track="Track V" room="11층 E" backgroundColor="#7d0151">
    {children}
  </Item>
)

const ScheduleSection: React.StatelessComponent<{}> = () => (
  <SectionTemplate title="스케쥴" iconClass="fa fa-clock-o fa-2x">
    <Wrapper>
      <Row>
        <Time>10:00 ~ 10:30</Time>
        <CardWrapper>
          <Card>
            <Body>Registration</Body>
          </Card>
        </CardWrapper>
      </Row>
      <Row>
        <Time>10:30 ~ 11:10</Time>
        <CardWrapper>
          <Item track="Track Ⅰ,Ⅱ,Ⅲ" room="11층 A,B,C" backgroundColor="#4e4e4e">
            커뮤니티 대담<br />커뮤니티 입문하기
          </Item>
          <Track4>IoT Labs</Track4>
        </CardWrapper>
      </Row>
      <Row>
        <Time>11:10 ~ 11:50</Time>
        <CardWrapper>
          <Item track="Track Ⅰ,Ⅱ,Ⅲ" room="11층 A,B,C" backgroundColor="#4e4e4e">
            커뮤니티 대담<br />커뮤니티 입문하기
          </Item>
          <Track4>ElasticSearch</Track4>
        </CardWrapper>
      </Row>
      <Row>
        <Time>11:50 ~ 13:00</Time>
        <CardWrapper>
          <Card>
            <Body>Lunch</Body>
          </Card>
        </CardWrapper>
      </Row>
      <Row>
        <Time>13:00 ~ 13:40</Time>
        <CardWrapper>
          <Track1>Keras Korea</Track1>
          <Track2>자바카페</Track2>
          <Track3>오픈스택 한국 커뮤니티</Track3>
          <Track4>Microsoft</Track4>
          <Track5>Korea Azure User Group (KRAZURE)</Track5>
        </CardWrapper>
      </Row>
      <Row>
        <Time>13:40 ~ 14:20</Time>
        <CardWrapper>
          <Track1>Taeyo.NET</Track1>
          <Track2>단군소프트</Track2>
          <Track3>우분투 한국 커뮤니티</Track3>
          <Track4>Microsoft</Track4>
          <Track5>Korea Azure User Group (KRAZURE)</Track5>
        </CardWrapper>
      </Row>
      <Row>
        <Time>14:20 ~ 14:40</Time>
        <CardWrapper>
          <Item track="Track Ⅰ,Ⅱ,Ⅲ" room="11층 A,B,C" backgroundColor="#4e4e4e">
            Break
          </Item>
          <Track4>Microsoft</Track4>
          <Track5>Korea Azure User Group (KRAZURE)</Track5>
        </CardWrapper>
      </Row>
      <Row>
        <Time>14:40 ~ 15:20</Time>
        <CardWrapper>
          <Track1>오라클</Track1>
          <Track2>EFL 한국 커뮤니티</Track2>
          <Track3>C++ Korea</Track3>
          <Track4>Microsoft</Track4>
          <Track5>Korea Azure User Group (KRAZURE)</Track5>
        </CardWrapper>
      </Row>
      <Row>
        <Time>15:20 ~ 16:00</Time>
        <CardWrapper>
          <Track1>MongoDB Korea</Track1>
          <Track2>Nogata Jun (Japan)</Track2>
          <Track3>ASP.NET Korea User Group</Track3>
          <Track4>Jboss User Group</Track4>
          <Track5>캐글뽀개기</Track5>
        </CardWrapper>
      </Row>
      <Row>
        <Time>16:00 ~ 16:30</Time>
        <CardWrapper>
          <Item track="Track Ⅰ,Ⅱ,Ⅲ" room="11층 A,B,C" backgroundColor="#4e4e4e">
            Break
          </Item>
          <Track4>Jboss User Group</Track4>
          <Track5>캐글뽀개기</Track5>
        </CardWrapper>
      </Row>
      <Row>
        <Time>16:30 ~ 17:10</Time>
        <CardWrapper>
          <Track1>스파크 사용자 모임</Track1>
          <Track2>하모니카 (HarmonyCar)</Track2>
          <Track3>바벨피쉬</Track3>
          <Track4>Jboss User Group</Track4>
          <Track5>캐글뽀개기</Track5>
        </CardWrapper>
      </Row>
      <Row>
        <Time>17:10 ~ 17:50</Time>
        <CardWrapper>
          <Track1>코딩이랑 무관합니다만</Track1>
          <Track2>자바스크립트 개발자 포럼</Track2>
          <Track3>TNF/Needleworks</Track3>
          <Track4>Jboss User Group</Track4>
          <Track5>캐글뽀개기</Track5>
        </CardWrapper>
      </Row>
      <Row>
        <Time>17:50 ~ 18:00</Time>
        <CardWrapper>
          <Card>
            <Body>경품추첨 및 마무리</Body>
          </Card>
        </CardWrapper>
      </Row>
    </Wrapper>
  </SectionTemplate>
)

export default ScheduleSection
