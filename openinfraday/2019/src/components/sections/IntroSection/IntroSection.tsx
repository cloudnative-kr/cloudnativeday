import React, { Component } from 'react'
import styled, { css } from 'styled-components/macro'
import Container, { InnerContainer } from '../../atoms/Container/Container'
import Header from '../../atoms/Header/Header'
import { ON_MOBILE } from '../../../constants/responsive'
import { ChevronDown } from 'styled-icons/boxicons-regular/ChevronDown'

const StyledContainer = styled(Container)<{ showTotalContent: boolean }>`
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

  ${p =>
    !p.showTotalContent &&
    css`
      padding-bottom: 10px;
    `}
`

const Gradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 150px;
  background: rgba(245, 245, 245, 0)
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 10%,
      rgba(255, 255, 255, 0.4) 40%,
      rgba(255, 255, 255, 0.8) 75%,
      rgba(255, 255, 255, 1) 100%
    )
    repeat scroll 0 0;
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
  font-size: 17px;
  font-weight: 400;
  word-break: keep-all;

  strong {
    font-weight: bold;
  }

  @media ${ON_MOBILE} {
    font-size: 15px;
  }
`

const DownIconContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 10px;
`

const DownIcon = styled(ChevronDown)`
  color: black;
  width: 60px;
  height: 60px;
  cursor: pointer;
`

class IntroSection extends Component {
  state = {
    showTotalContent: false,
  }

  handleShow = () => {
    this.setState({ showTotalContent: true })
  }

  render() {
    return (
      <StyledContainer showTotalContent={this.state.showTotalContent}>
        {!this.state.showTotalContent && (
          <Gradient>
            <DownIconContainer>
              <DownIcon onClick={this.handleShow} />
            </DownIconContainer>
          </Gradient>
        )}
        <InnerContainer>
          <Header>Intro</Header>
          <Content>
            <Para>
              <p>
                OpenStack, Kubernetes, Ceph, OCP 한국 커뮤니티가 힘을 합쳐서
                {/* <br /> */}
                <strong>
                  {' '}
                  "Open Infrastructure & Cloud Native Days Korea 2019"
                </strong>{' '}
                행사를 개최하게 되었습니다. Open Infrastructure 와 관련된 많은
                분야를 어우르는 커뮤니티들의 행사로 한 걸음 더 나아가게
                되었습니다.
              </p>
              <p>
                오픈 소스 커뮤니티에 참여하고 있는 저희들 입장에서도 하나의
                분야가 아닌 서로 연관된 여러 분야의 기술들을 한 자리에서 보고,
                서로 논의하고 공유할 수 있다는 장을 마련할 수 있어서 무척
                기쁩니다.
              </p>
              <p>
                무엇보다도, 커뮤니티에 참여하시고 관심 가져 주시는 모든 분들과
                이러한 활동들을 항상 지원하고 응원해주시는 후원 업체분들, 그리고
                발표와 핸즈온 워크샵을 진행해 주실 모든 분들께 감사의 말씀
                드립니다.
              </p>
              이번 행사는 <strong>7월 18-19일 (목, 금) 양일간</strong> 개최
              되며,{' '}
              <strong>
                을지로 입구에 있는 세 군데의 건물들 (페럼타워, T-타워,
                삼화타워)에서 동시에
              </strong>{' '}
              열리게 되었습니다.
              <p>
                첫째날과 둘째날 모두 글로벌 오픈소스 재단들 (CNCF, OpenStack
                Foundation, OCP Foundation등)에서 직접 오셔서 키노트를 해 주실
                예정이시며, 다양한 키노트, 기술 발표 및 핸즈온 워크샵들을
                마련하였습니다. 많은 참여와 관심 부탁드립니다.
              </p>
              <br />
              <p>아래 각 커뮤니티에서 올리는 인사말입니다. ^^</p>
              <br />
              {!this.state.showTotalContent ? (
                <p>
                  <strong>오픈스택 (OpenStack)</strong>은 클라우드 관리 플랫폼을
                  구축하기 위한 오픈 소스 소프트웨어 프로젝트로,
                </p>
              ) : (
                <>
                  <p>
                    <strong>오픈스택 (OpenStack)</strong>은 클라우드 관리
                    플랫폼을 구축하기 위한 오픈 소스 소프트웨어 프로젝트로,
                    개별적으로 설치하는 6개의 코어 및 19개의 선택 컴포넌트들을
                    서로 유기적으로 연동하여 직접 클라우드를 구성할 수 있습니다.
                    2010년 7월 Rackspace사와 NASA로 부터 시작한 이후, 전 세계
                    179개 국가로부터 50,000명이 넘는 커뮤니티 회원이 참여 및
                    기여를 통해 (2016년 7월 통계) 꾸준히 성장하고 있습니다.
                    오픈스택 한국 커뮤니티는 공식 사용자 그룹으로서 다양한 정기
                    세미나, 스터디 활동, 번역팀 활동을 비롯하여 페이스북,
                    메일링리스트, IRC, Slack 등 여러 커뮤니케이션 채널을 통해
                    많은 오픈스택 유저 및 관심있는 분들과 활발히 활동하고
                    있습니다. 저희 OpenStack 커뮤니티는 2014년 1회 OpenStack Day
                    Korea 행사를 시작으로, 2018년까지 다섯 번의 커뮤니티 행사를
                    가졌습니다. 올해는 저희 외에도 다양한 커뮤니티분들과 같이 할
                    수 있어서 더 뜻깊은 행사가 될 것 같습니다.
                  </p>
                  <br />
                  <p>
                    <strong>Cloud Native Computing Foundation (CNCF)</strong>{' '}
                    에는 다양한 프로젝트들이 존재하며 Kubernetes 는 그 중에서
                    가장 활발하면서도 많이 사용되고 있습니다. 2017년 Kubernetes
                    1.0 버전이 Release 된 이후에 Container Orchestrator 로는
                    업계 표준으로 자리잡았습니다. Kubernetes Korea Group 은
                    다양한 분야의 사람들이 모여 Kubernetes 를 포함한 CNCF 내의
                    모든 프로젝트, 즉 Cloud Native Computing 에 대한 기술을
                    연구/개발/적용하는 커뮤니티입니다. 2019년에 이렇게 다른
                    커뮤니티분들과 행사를 가지게 되어서 무척 기쁩니다. 많은
                    정보와 도움 받아 가셨으면 합니다.
                  </p>
                  <br />
                  <p>
                    <strong>OCP Korea</strong>는 데이터센터 관련 기술들을
                    공유하고 발전 시키기는 장을 마련하기 위해 2019년 정식 설립을
                    하였습니다. 저희의 비전은 국내 인프라 기술 담당자간의 교류를
                    통해 상호 시너지를 창출하고 국내 환경에 특화된 기술들을
                    개발/발굴하여 공유하는 커뮤니티로 발전 시키는 것 입니다.
                    이제 시작하는 커뮤니티임에도 이런 큰 행사에 참여하게 되어서
                    영광입니다. 앞으로 국내에서도 소프트웨어뿐만 아니라 하드웨어
                    분야에서도 오픈 커뮤니티가 많이 성장했으면 합니다.
                  </p>
                  <br />
                  <p>
                    <strong>Ceph</strong>은 오픈소스 분산 스토리지로 고성능,
                    고용량, 확장성의 특징을 가지며, SPOF 가 없어 클라우드에서
                    많이 사용되고 있습니다. Ceph이 제공하는 스토리지 형태는
                    Object, Block, File System(Shared 포함)으로 클라우드에서
                    필요로 하는 대부분의 스토리지 타입을 제공할 수 있습니다.
                    Korea Ceph User Group 은 meet-up을 통해 Ceph을 개발/활용하고
                    있는 다양한 전문가들이 주기적으로 모여 서로의 기술을
                    논의하고 발표하면서 오픈소스 생태계를 발전시키는데 기여하고
                    있습니다. Ceph은 단독으로서가 아니라 OpenStack, Kubernetes,
                    OCP 커뮤니티와 같이 할 때 더 빛이 나는 것 같습니다. 이렇게
                    힘을 합쳐서 행사를 하게 되어서 무척 기쁩니다.
                  </p>
                </>
              )}
            </Para>
          </Content>
        </InnerContainer>
      </StyledContainer>
    )
  }
}

export default IntroSection
