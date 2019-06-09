import React, { Component } from 'react'
import styled from 'styled-components/macro'
import Container, { InnerContainer } from '../../atoms/Container/Container'
import Header from '../../atoms/Header/Header'
import { ON_MOBILE } from '../../../constants/responsive'

const StyledContainer = styled(Container)`
  position: relative;

  &:after {
    content: '';
    background: url('/backgrounds/brushed_alu.png');
    opacity: 0.7;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`

const Content = styled.div`
  margin-top: 100px;

  @media ${ON_MOBILE} {
    margin-top: 70px;
  }
`

const Para = styled.p`
  max-width: 900px;
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 300;
  word-break: keep-all;

  strong {
    font-weight: bold;
  }

  @media ${ON_MOBILE} {
    font-size: 16px;
  }
`

const From = styled(Para)`
  font-weight: bold;
  padding-top: 20px;
`

class IntroSection extends Component {
  render() {
    return (
      <StyledContainer>
        <InnerContainer>
          <Header>Intro</Header>
          <Content>
            <Para>
              지난 OpenStack Days Korea 행사에 이어 올해에는 오는 6월 28일과
              29일 양일간{' '}
              <strong>
                Open Infrastructure: OpenStack, Containers, and Cloud Native
                Computing
              </strong>
              이라는 주제로 <strong>Open Infra Days Korea 2018</strong>을
              개최합니다. OpenStack/OpenInfra Days는 OpenStack Foundation에서
              주최 참여를 하는 공식 글로벌 행사이며, 전 세계 많은 나라에서
              개최되고 있습니다.
            </Para>
            <Para>
              한국에서는 2014년 1회 OpenStack Day Korea 행사를 시작으로,
              오픈스택 한국 커뮤니티가 주최로 참여하는 다섯 번째 행사입니다.
              한국 최대 규모의 커뮤니티에서 주도하는 클라우드 & 오픈 인프라 오픈
              소스 소프트웨어 행사로 자리매김 해 왔으며 많은 분들의 관심을
              받아왔습니다.
            </Para>
            <Para>
              올해 행사도 예년과 마찬가지로 이틀간 열릴 예정으로, 코엑스 3층
              Hall E에서 첫째 날은 대규모 컨퍼런스 중심으로, 둘째 날은
              Kubernetes workshop을 포함한 다양한 워크샵 및 Deep Dive 세션을
              중심으로 한 다양한 프로그램을 구성하였습니다.
            </Para>
            <Para>
              Open Infra Days Korea 2018에서는 클라우드 컴퓨팅 및 컨테이너를
              이루는 OpenStack, Ceph, Docker, Kubernetes 등 다양한 오픈 인프라
              솔루션과 함께 DevOps, CI/CD 등 다양한 오픈 인프라에서의 유스
              케이스와 관련한 다양한 분야의 기술들을 접하고, 서로 얘기하고 배울
              수 있는 공유의 장을 마련하고자 노력하였습니다.
            </Para>
            <Para>이번 행사에 많은 관심과 참여 부탁 드립니다.</Para>
            <From>
              주최: 오픈스택 한국 커뮤니티, CNCF 한국 커뮤니티 & OpenStack
              Foundation 일동
            </From>
          </Content>
        </InnerContainer>
      </StyledContainer>
    )
  }
}

export default IntroSection
