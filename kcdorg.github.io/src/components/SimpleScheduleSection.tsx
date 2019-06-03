import * as React from 'react'
import { StatelessComponent } from 'react'
import styled from 'styled-components'
import SectionTemplate from './templates/SectionTemplate'
import { ON_MOBILE } from './atoms/Responsive'

const Wrapper = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 0 10px;
  font-size: 14px;
  overflow: auto;
  /* word-break: keep-all; */

  @media ${ON_MOBILE} {
    font-size: 10px;
  }
`

const Table = styled.table`
  width: 100%;
  min-width: 550px;
  border-collapse: collapse;
  border: 1px solid #4a4a4a;
  table-layout: fixed;
`

const Row = styled.tr`
  border: 1px solid #4a4a4a;
`

const Header = styled.th`
  border: 1px solid #4a4a4a;
  padding: 8px;
`

const Data = styled.td`
  border: 1px solid #4a4a4a;
  text-align: center;
  padding: 8px;
  word-break: keep-all;
`

const Notice = styled.div`
  margin-top: 15px;
  padding: 20px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`

const Red = styled.div`
  font-weight: bold;
  color: orangered;
`

// const FileLink = styled.a.attrs({
//   target: '_blank',
// })`
//   color: lightcoral;
//   text-decoration: none;
// `

// interface FileProps {
//   href: string
// }

// const File: StatelessComponent<FileProps> = ({ children, href }) => (
//   <div style={{ marginTop: '10px' }}>
//     <FileLink href={href}>{children ? children : '발표자료'}</FileLink>
//   </div>
// )

const SimpleScheduleSection: StatelessComponent<{}> = () => (
  <SectionTemplate title="스케쥴" iconClass="fa fa-clock-o fa-2x">
    <Wrapper>
      <Table>
        <thead>
          <Row>
            <Header rowSpan={2}>시간</Header>
            <Header>Track Ⅰ</Header>
            <Header>Track Ⅱ</Header>
            <Header>Track Ⅲ</Header>
            <Header>Track IV</Header>
            <Header>Track V</Header>
          </Row>
          <Row>
            <Header>11층 A</Header>
            <Header>11층 B</Header>
            <Header>11층 C</Header>
            <Header>11층 D</Header>
            <Header>11층 E</Header>
          </Row>
        </thead>
        <tbody>
          <Row>
            <Header>10:00 ~ 10:30</Header>
            <Data colSpan={5}>참가 등록</Data>
          </Row>
          <Row>
            <Header>10:30 ~ 11:00</Header>
            <Data rowSpan={3} colSpan={3}>
              슬기로운 커뮤니티 생활 (부제 : 커뮤니티를 통해 성장하는 방법)
              <br /> 커뮤니티 대담
            </Data>
            <Data>
              Cloud, 도데체 어떻게 공부해야 할까? (공부삽질과 Azure 학습방법)
              <br />
              김세준(MS MVP)
              {/* <File href="https://www.dropbox.com/s/tmig6fy27xyqbe3/2017_Contributhon_IoTLabs.pdf?dl=0" /> */}
            </Data>
            <Data rowSpan={3} />
          </Row>
          <Row>
            <Header>11:00 ~ 11:30</Header>
            <Data>
              변화는 행동을 채움으로 시작된다 "커뮤니티 지속하기/여남뉴스
              개발기"
              <br />
              김정환
              <br />
              (널채움(nullfull))
              {/* <File href="https://s3.ap-northeast-2.amazonaws.com/kr.elastic.co/docs/jongmin-kim-Korea-Community-Day.pdf" /> */}
            </Data>
          </Row>
          <Row>
            <Header>11:30 ~ 12:00</Header>
            <Data>
              Node.js and the Community ※ 통역이 지원되지 않습니다
              <br />
              Thomas Whatson
              {/* <File href="https://s3.ap-northeast-2.amazonaws.com/kr.elastic.co/docs/jongmin-kim-Korea-Community-Day.pdf" /> */}
            </Data>
          </Row>
          {/* <Row> */}
          <Row>
            <Header>12:00 ~ 13:00</Header>
            <Data colSpan={5}>Lunch</Data>
          </Row>
          <Row>
            <Header>13:00 ~ 13:30</Header>
            <Data>
              스타트업이 원하는 개발자, SI / 대기업 출신들도 가능할까?
              <br />
              <br />
              신현묵(OKKY)
              {/* <br />
              <File href="https://tykimos.github.io/2018/02/24/Deep_Learning_Tool_in_Everyones_hands/" /> */}
            </Data>
            <Data>
              Modern 하게 Codeigniter4 하지 않겠는가?
              <br />
              <br />
              김성현(Codeigniter 한국사용자포럼)
              {/* <br />
              <File href="http://tech.javacafe.io/2018/02/24/%EC%B0%A8%EA%B3%A1%EC%B0%A8%EA%B3%A1_%EC%89%BD%EA%B2%8C_%EC%95%8C%EC%95%84%EA%B0%80%EB%8A%94_Elasticsearch%EC%99%80_Nodejs/" /> */}
            </Data>
            <Data>
              PyTorch C++ API 입문
              <br /> 옥찬호(C++ Korea)
              {/* <br />
              <File href="https://s3.ap-northeast-2.amazonaws.com/festa-temp/kcd2018-presentations/%E1%84%8E%E1%85%AC%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%85%E1%85%A1%E1%86%A8(%E1%84%8B%E1%85%A9%E1%84%91%E1%85%B3%E1%86%AB%E1%84%89%E1%85%B3%E1%84%90%E1%85%A2%E1%86%A8)-%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%AE%E1%84%83%E1%85%B3+API%E1%84%85%E1%85%B3%E1%86%AF+%E1%84%92%E1%85%AA%E1%86%AF%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%92%E1%85%A1%E1%84%8B%E1%85%A7+FirstApp+%E1%84%86%E1%85%A9%E1%84%87%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF+%E1%84%8B%E1%85%A2%E1%86%B8+%E1%84%88%E1%85%A1%E1%84%85%E1%85%B3%E1%84%80%E1%85%A6+%E1%84%80%E1%85%AE%E1%84%92%E1%85%A7%E1%86%AB%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5.pdf" /> */}
            </Data>
            <Data rowSpan={5}>
              <Red>Workshop 1</Red>
              <br />
              도커와 쿠버네티스를 활용하여 간단한 웹 서비스 구축해보기
              <br />
              <br />
              최용호(자바카페)
              {/* <br />
              <File href="https://s3.ap-northeast-2.amazonaws.com/festa-temp/kcd2018-presentations/%E1%84%80%E1%85%B5%E1%86%B7%E1%84%8B%E1%85%B3%E1%86%AB%E1%84%8C%E1%85%B5(MS%E1%84%8B%E1%85%AF%E1%84%8F%E1%85%B3%E1%84%89%E1%85%A3%E1%86%B8)_KCD_Custom+Vision+HOL_EUNK.pdf" /> */}
            </Data>
            <Data rowSpan={5}>
              <Red>Workshop 2</Red>
              <br />
              TensorFlow 2.0 on Backend AI
              <br />
              <br />
              조만석, 김정묵 (Backend.Ai Usergroup)
              {/* <File href="https://goo.gl/WgV3PW" /> */}
            </Data>
          </Row>
          <Row>
            <Header>13:30 ~ 14:00</Header>
            <Data>
              순수 함수형 스칼라로 웹 애플리케이션 만들기
              <br />
              <br />
              박지수(라 스칼라 코딩단)
              {/* <br />
              <File href="https://s3.ap-northeast-2.amazonaws.com/festa-temp/kcd2018-presentations/ASP.NET+Core+and+Angular+and+Azure+20180224.pptx" /> */}
            </Data>
            <Data>
              Modularizing Chromium
              <br />
              <br />
              방진호,고병권(모닝클래스)
            </Data>
            <Data>
              Migration to MongoDB <br />
              <br />
              김동한(MongoDB Korea)
              {/* <br />
              <File href="https://s3.ap-northeast-2.amazonaws.com/festa-temp/kcd2018-presentations/%E1%84%80%E1%85%B5%E1%86%B7%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A5%E1%86%A8(%E1%84%8B%E1%85%AE%E1%84%87%E1%85%AE%E1%86%AB%E1%84%90%E1%85%AE%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%AE%E1%86%A8)_Hello%2C+world%E1%84%8B%E1%85%A6%E1%84%89%E1%85%A5+%E1%84%91%E1%85%A2%E1%84%8F%E1%85%B5%E1%84%8C%E1%85%B5%E1%86%BC%E1%84%81%E1%85%A1%E1%84%8C%E1%85%B5.pdf" /> */}
            </Data>
          </Row>
          <Row>
            <Header>14:00 ~ 14:20</Header>
            <Data colSpan={3}>Break</Data>
          </Row>
          <Row>
            <Header>14:20 ~ 14:50</Header>
            <Data>
              Top 10 Reasons for Using MySQL 8.0
              <br />
              <br />
              박혜선 (오라클)
              {/* <br />
              <File href="https://s3.ap-northeast-2.amazonaws.com/festa-temp/kcd2018-presentations/%E1%84%87%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A8%E1%84%89%E1%85%A5%E1%86%AB(%E1%84%8B%E1%85%A9%E1%84%85%E1%85%A1%E1%84%8F%E1%85%B3%E1%86%AF)_WhatsNewInMySQL8.0_KR_V2.pdf" /> */}
            </Data>
            <Data>
              DevOps Korea의 활동 방향 (커뮤니티 운영을 위한 고민들)
              <br />
              <br />
              조철현(DevOps Korea)
              {/* <br />
              <File href="https://s3.ap-northeast-2.amazonaws.com/festa-temp/kcd2018-presentations/efl_kcd2018.pdf" /> */}
            </Data>
            <Data>
              오픈소스 커뮤니티 생태계 분석
              <br />
              <br />
              김호진(OpenStack Korea)
              {/* <br />
              <File href="https://s3.ap-northeast-2.amazonaws.com/festa-temp/kcd2018-presentations/%E1%84%87%E1%85%A1%E1%86%A8%E1%84%83%E1%85%A9%E1%86%BC%E1%84%92%E1%85%A1(C%2B%2B%E1%84%8F%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A1)_Build+Automation+of+C%2B%2B+Project.pptx" /> */}
            </Data>
          </Row>
          <Row>
            <Header>14:50 ~ 15:20</Header>
            <Data>
              Kubernetes와 Serverless의 만남 – Knative
              <br />
              <br />
              남정현(KRAZURE)
              {/* <br />
              <File href="https://s3.ap-northeast-2.amazonaws.com/festa-temp/kcd2018-presentations/%E1%84%80%E1%85%B5%E1%86%B7%E1%84%83%E1%85%A9%E1%86%BC%E1%84%92%E1%85%A1%E1%86%AB(MongoDB)_MongoDB+in+Chat+Bot+-+KCD+2018+Public.pdf" /> */}
            </Data>
            <Data>
              “좋은 개발자” 프레임 아작내기
              <br />
              <br />
              김요한(React Korea)
              {/* <br />
              <File href="https://s3.ap-northeast-2.amazonaws.com/festa-temp/kcd2018-presentations/NogataJun(Japan)-kcd_opensource_community.pdf" /> */}
            </Data>
            <Data>
              데이터를 뽀개서 추천시스템 구현하기
              <br />
              <br />
              이상열 (데이터뽀개기)
              {/* <br />
              <File href="https://s3.ap-northeast-2.amazonaws.com/festa-temp/kcd2018-presentations/%E1%84%92%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A1%E1%86%BC%E1%84%92%E1%85%AE%E1%86%AB(ASP.Net)_I+am+ASP.NET+Core+Razor+Pages.pdf" /> */}
            </Data>
            {/* <Data rowSpan={4}>
              <Red>Workshop 3</Red>
              <br />BlockChain In BitCoin<br />
              <br />이태영(Jboss User Group)
            </Data>
            <Data rowSpan={4}>
              <Red>Workshop 4</Red>
              <br />타이디(tidyverse)와 당근(caret)으로 캐글(kaggle) 입문하기<br />
              <br />캐글뽀개기 커뮤니티
              <br />
              <File href="https://github.com/KaggleBreak/walkingkaggle/tree/master/kcd2018" />
            </Data> */}
          </Row>
          <Row>
            <Header>15:20 ~ 15:40</Header>
            <Data colSpan={5}>Break</Data>
          </Row>
          <Row>
            <Header>15:40 ~ 16:10</Header>
            <Data>
              Scaffold(JHipster) project를 이용한 MSA 환경 구축
              <br />
              <br />
              장진달(SLIPP)
              {/* <br />
              <File href="https://s3.ap-northeast-2.amazonaws.com/festa-temp/kcd2018-presentations/KCD_Spark_Summit_%E1%84%80%E1%85%B5%E1%86%B7%E1%84%89%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%AE.pdf" /> */}
            </Data>
            <Data>
              구글이 선택한 코틀린? 왜 좋을까?
              <br />
              <br />
              권태환(Kotlin Korea)
              {/* <br />
              <File href="https://s3.ap-northeast-2.amazonaws.com/festa-temp/kcd2018-presentations/7th_KCD_HarmonyCar_funfunyoo.pptx" /> */}
            </Data>
            <Data rowSpan={5}>
              <Red>Workshop 3</Red>
              <br />
              가장 빨리 만나는 챗봇 프로그래밍 with Bot Framework
              <br />
              <br />
              김영욱(MS)
              {/* <br />
              <File href="https://s3.ap-northeast-2.amazonaws.com/festa-temp/kcd2018-presentations/%E1%84%87%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A8%E1%84%8B%E1%85%AE%E1%86%BC(%E1%84%87%E1%85%A1%E1%84%87%E1%85%A6%E1%86%AF%E1%84%91%E1%85%B5%E1%84%89%E1%85%B1)%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%AE%E1%86%A8%E1%84%8B%E1%85%A5%E1%84%8B%E1%85%B5%E1%86%B7%E1%84%87%E1%85%A6%E1%84%83%E1%85%B5%E1%86%BC.pdf" /> */}
            </Data>
            <Data rowSpan={5}>
              <Red>Workshop 4</Red>
              <br />
              모두의 손에 딥러닝 툴을…
              <br />
              <br />
              케라스 코리아
              {/* <br />
              <File href="https://s3.ap-northeast-2.amazonaws.com/festa-temp/kcd2018-presentations/%E1%84%87%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A8%E1%84%8B%E1%85%AE%E1%86%BC(%E1%84%87%E1%85%A1%E1%84%87%E1%85%A6%E1%86%AF%E1%84%91%E1%85%B5%E1%84%89%E1%85%B1)%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%AE%E1%86%A8%E1%84%8B%E1%85%A5%E1%84%8B%E1%85%B5%E1%86%B7%E1%84%87%E1%85%A6%E1%84%83%E1%85%B5%E1%86%BC.pdf" /> */}
            </Data>
            <Data rowSpan={5} />
          </Row>
          <Row>
            <Header>16:10 ~ 16:40</Header>
            <Data>
              JavaScript 엔지니어들이 말하는 TypeScript 를 애정하는 이유
              <br />
              <br />
              이웅재(TypeScript Korea)
              {/* <br />
              <File href="https://s3.ap-northeast-2.amazonaws.com/festa-temp/kcd2018-presentations/%E1%84%87%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A1%E1%86%BC%E1%84%92%E1%85%A7%E1%86%AB(%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B5%E1%86%BC%E1%84%80%E1%85%AA%E1%84%86%E1%85%AE%E1%84%80%E1%85%AA%E1%86%AB%E1%84%92%E1%85%A1%E1%86%B8%E1%84%82%E1%85%B5%E1%84%83%E1%85%A1%E1%84%86%E1%85%A1%E1%86%AB)_%E1%84%86%E1%85%AE%E1%86%AF%E1%84%8B%E1%85%A5%E1%84%87%E1%85%A9%E1%84%8C%E1%85%B5+%E1%84%8B%E1%85%A1%E1%86%AD%E1%84%8B%E1%85%A1%E1%86%BB%E1%84%89%E1%85%B3%E1%86%B8%E1%84%82%E1%85%B5%E1%84%83%E1%85%A1%E1%84%86%E1%85%A1%E1%86%AB+V8.pptx" /> */}
            </Data>
            <Data>
              "SPA with C#, Blazor"
              <br />
              <br />
              원기욱(ASP.NET Korea User Group)
              {/* <br />
              <File href="http://slides.com/chequer/axdatagrid-first" /> */}
            </Data>
          </Row>
          <Row>
            <Header>16:40 ~ 17:00</Header>
            <Data colSpan={2}>Break</Data>
          </Row>
          <Row>
            <Header>17:00 ~ 17:30</Header>
            <Data>
              나는 왜 React 와 Typescript를 선택하게 되었나
              <br />
              <br />
              장기영(JSDEVKR)
            </Data>
            <Data>
              대한민국에서 닷넷 개발자로 살아가기
              <br />
              <br />
              박용준, 한상훈(Taeyo.Net)
            </Data>
          </Row>
          <Row>
            <Header>17:30 ~ 18:00</Header>
            <Data>
              33명이 함께한 10 minutes to pandas 번역 이야기
              <br />
              <br />
              김지은(데잇걸즈)
            </Data>
            <Data>
              코딩하는 공익 – 아직 세상을 바꾸고 싶은 개발자에게
              <br />
              <br />
              반병현(코딩과무관합니다만)
            </Data>
          </Row>
          <Row>
            <Header>18:00 ~ 18:20</Header>
            <Data colSpan={5}> 마무리</Data>
          </Row>
          <Row>
            <Header>18:20 ~ 20:00</Header>
            <Data colSpan={5}>BOF(커뮤니티 및 참가자 전원 참석 가능)</Data>
          </Row>
        </tbody>
      </Table>
    </Wrapper>
    <Notice>
      ※ Workshop은 개인 노트북을 지참하셔야 합니다. <br />※ 참가자 모집 마감 후
      개별적으로 Workshop 및 BOF 참가 관련하여 연락드릴 예정이오니 참고하여
      주시기 바랍니다.
    </Notice>
  </SectionTemplate>
)

export default SimpleScheduleSection
