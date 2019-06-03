import styled from 'styled-components'
const MobileBreakpoint = '740px'

const ON_MOBILE = `screen and (max-width: ${MobileBreakpoint})`

const MobileView = styled.div`
  display: none;

  @media screen and (max-width: ${MobileBreakpoint}) {
    display: block;
  }
`

const DesktopView = styled.div`
  @media screen and (max-width: ${MobileBreakpoint}) {
    display: none;
  }
`

export { MobileView, DesktopView, ON_MOBILE }
