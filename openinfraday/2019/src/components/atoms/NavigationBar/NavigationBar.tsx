import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { Flex, Box, BoxProps } from '@rebass/grid'
import { animateScroll as scroll, Events, Link } from 'react-scroll'
import Button from 'components/atoms/Button'
import FestaLogo from 'assets/FestaLogo'
import CollaborationX from 'assets/CollaborationX'
import OpenInfraDayLogo from 'assets/OpenInfra_White.png'
import { GREY, CHARCOAL_BLACK } from 'styles/colors'
import { ON_MOBILE } from 'styles/responsive'

const WHITE = '#fff'

const Container = styled(Flex)`
  position: relative;
  max-width: 1220px;
  flex-wrap: wrap;
  width: 100%;
  background-color: transparent;
`

Container.defaultProps = {
  mx: 'auto',
}
const BarWrapper = styled.div<{ sticky?: boolean }>`
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

  ${p =>
    p.sticky &&
    css`
      height: 47px;
      background-color: rgba(50, 50, 50, 0.3);
    `};
`

const LogoBox = styled(Box)<BoxProps>`
  width: 20%;
`
const Menu = styled(Box)<BoxProps>`
  width: 80%;
  justify-content: flex-end;
`

const FestaLogoAdjuster = styled.div`
  margin: 0 5px 0 5px;
`

const ExternalLogo = styled.img<{ size?: number }>`
  height: ${p => p.size || 30}px;
  width: ${p => p.size || 30}px;
`

const MenuLink = styled(Button)<{ hide?: boolean; ghost?: boolean }>`
  height: 30px;
  padding: 0 5px 0 5px;
  margin: 0 15px 0 15px;
  font-size: 14px;
  background-color: transparent;
  border: 0;
  line-height: inherit;
  word-break: keep-all;
  transition: all 0.1s ease;

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

  ${p =>
    p.hide &&
    css`
      @media ${ON_MOBILE} {
        display: none;
      }
    `};

  ${p =>
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

class CustomLink extends Component<any> {
  render() {
    return (
      <Link
        spy={true}
        smooth={true}
        duration={400}
        delay={100}
        {...this.props}
      />
    )
  }
}

interface NavigationBarProps {
  handleTicketBuy: () => void
  handleScrollTo?: () => void
}

interface NavigationBarState {
  isSticky: boolean
}

class NavigationBar extends Component<NavigationBarProps, NavigationBarState> {
  state = {
    isSticky: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const top =
      document.documentElement.scrollTop ||
      (document.body.parentNode! as HTMLBodyElement).scrollTop ||
      document.body.scrollTop
    if (top < 1) {
      this.setState({ isSticky: false })
    } else {
      this.setState({ isSticky: true })
    }
  }

  scrollTo = (height: number) => {
    scroll.scrollTo(height)
  }

  render() {
    return (
      <BarWrapper sticky={this.state.isSticky}>
        <Container flexWrap="wrap" px={2}>
          <LogoBox>
            <FestaLogoAdjuster>
              <FestaLogo size={50} />
            </FestaLogoAdjuster>
            <CollaborationX size={15} />
            <ExternalLogo src={OpenInfraDayLogo} size={35} />
          </LogoBox>
          <Menu flexDirection="row-reverse">
            <MenuLink
              onClick={() => {
                this.scrollTo(0)
              }}
            >
              Home
            </MenuLink>
            <CustomLink to="info">
              <MenuLink hide={true}>Info</MenuLink>
            </CustomLink>
            <CustomLink to="schedule">
              <MenuLink hide={true}>시간표</MenuLink>
            </CustomLink>
            <CustomLink to="speakers">
              <MenuLink>Speakers</MenuLink>
            </CustomLink>
            <CustomLink to="tickets">
              <MenuLink hide={true}>Tickets</MenuLink>
            </CustomLink>
            <CustomLink to="sponsers">
              <MenuLink hide={true}>Sponsors</MenuLink>
            </CustomLink>
            <MenuLink onClick={this.props.handleTicketBuy} ghost={true}>
              티켓구입
            </MenuLink>
          </Menu>
        </Container>
      </BarWrapper>
    )
  }
}

export default NavigationBar
