import * as React from 'react'
import styled, { css } from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import { animateScroll as scroll, Link } from 'react-scroll'
import Button from './atoms/Button'
import { ON_MOBILE } from './atoms/Responsive'

const WHITE = '#fff'
export const GREY = '#a4a4a4'
export const CHARCOAL_BLACK = '#4a4a4a'

const Container = styled(Flex)`
  display: flex;
  position: relative;
  max-width: 1220px;
  flex-wrap: wrap;
  width: 100%;
  background-color: transparent;
`

Container.defaultProps = {
  mx: 'auto',
}

interface BarWrapperProps {
  sticky: boolean
}

const BarWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  top: 0;
  width: 100%;
  height: 70px;
  position: fixed;
  z-index: 102;
  transition: all 0.3s ease;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  color: rgba(0, 0, 0, 0);

  * {
    display: flex;
    align-items: center;
  }

  ${(p: BarWrapperProps) => ''};

  ${(p: any) =>
    p.sticky &&
    css`
      height: 55px;
      background-color: rgba(50, 50, 50, 0.7);
    `}
`

const LogoBox = styled(Box)`
  width: 20%;
  padding-left: 25px;
  @media ${ON_MOBILE} {
    padding-left: 10px;
  }
`
const Menu = styled(Box)`
  /* flex-direction: row-reverse; */
  width: 80%;
  justify-content: flex-end;
`

// const FestaLogoAdjuster = styled.div`
//   margin: 0 5px 0 5px;
// `

const ExternalLogo: any = styled.img`
  height: ${(p: any) => p.size || 26}px;
  @media ${ON_MOBILE} {
    height: 19px;
  }
  /* ${(p: any) =>
    p.top &&
    css`
      display: none;
    `}; */
  /* width: ${(p: any) => p.size || 30}px; */
`

const MenuLink: any = styled(Button)`
  height: 30px;
  padding: 0 5px 0 5px;
  margin: 0 15px 0 15px;
  font-size: 14px;
  background-color: transparent;
  border: 0;
  line-height: inherit;
  word-break: keep-all;
  transition: all 0.1s ease;
  @media ${ON_MOBILE} {
    font-size: 12px;
  }
  /* ${(p: any) =>
    p.top &&
    css`
      display: none;
    `}; */

  &:hover,
  &:focus {
    background-color: transparent;
    font-weight: bold;
    text-shadow: 0px 0px 15px lightblue;
    cursor: pointer;
  }
  &:active {
    background-color: transparent;
    font-weight: bold;
    text-shadow: 0px 0px 15px lightblue;
  }

  @media ${ON_MOBILE} {
    margin: 0 10px 0 10px;
  }

  ${(p: any) =>
    p.hide &&
    css`
      @media ${ON_MOBILE} {
        display: none;
      }
    `};

  ${(p: any) =>
    p.ghost &&
    css`
      padding: 0 15px 0 15px;
      border: 1.3px solid ${WHITE};
      border-radius: 30px;
      background-color: #fff;
      color: ${CHARCOAL_BLACK};
      &:hover,
      &:focus {
        background-color: ${GREY};
        font-weight: bold;
        text-shadow: 0px 0px 15px lightblue;
        cursor: pointer;
      }
      &:active {
        background-color: ${GREY};
        font-weight: bold;
        text-shadow: 0px 0px 15px lightblue;
      }
    `};
`

class CustomLink extends React.Component<any> {
  render() {
    const { to } = this.props as any
    return (
      <Link
        to={to}
        // active={true}
        spy={true}
        smooth={true}
        duration={400}
        delay={100}
        {...this.props}
      />
    )
  }
}

interface NavigationBarState {
  isSticky: boolean
}

class NavigationBar extends React.Component<{}, NavigationBarState> {
  state = {
    isSticky: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (e: any) => {
    const top =
      document.documentElement.scrollTop ||
      // document.body.parentNode.scrollTop ||
      document.body.scrollTop
    if (top < 1) {
      this.setState({ isSticky: false })
    } else {
      this.setState({ isSticky: true })
    }
  }

  scrollTo = (height: any) => {
    scroll.scrollTo(height)
  }

  handleTicketBuy = () => {
    window.open('https://festa.io/events/200')
  }

  render() {
    const { isSticky } = this.state
    const isTop = !isSticky
    return (
      <BarWrapper sticky={this.state.isSticky}>
        <Container flexWrap="wrap" px={2}>
          <LogoBox>
            {/* <FestaLogoAdjuster>
              <FestaLogo size={50} />
            </FestaLogoAdjuster> */}
            <ExternalLogo size={26} top={isTop} src={'nav-logo.png'} />
          </LogoBox>
          <Menu>
            <MenuLink
              top={isTop}
              hide={true}
              onClick={() => {
                this.scrollTo(0)
              }}
            >
              Home
            </MenuLink>

            <CustomLink to="schedule">
              <MenuLink top={isTop}>Schedule</MenuLink>
            </CustomLink>
            <CustomLink to="speakers">
              <MenuLink top={isTop}>Speakers</MenuLink>
            </CustomLink>
            <CustomLink to="location">
              <MenuLink top={isTop} hide={true}>
                Location
              </MenuLink>
            </CustomLink>
            <CustomLink to="faq">
              <MenuLink top={isTop} hide={true}>
                FAQ
              </MenuLink>
            </CustomLink>
            <CustomLink to="sponsers">
              <MenuLink top={isTop} hide={true}>
                Sponsors
              </MenuLink>
            </CustomLink>
            <CustomLink to="community">
              <MenuLink top={isTop} hide={true}>
                Community
              </MenuLink>
            </CustomLink>
            <MenuLink top={isTop} onClick={this.handleTicketBuy} ghost={true}>
              티켓구입
            </MenuLink>
          </Menu>
        </Container>
      </BarWrapper>
    )
  }
}

export default NavigationBar
