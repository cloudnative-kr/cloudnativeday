import styled, { css } from 'styled-components'
import { ON_MOBILE } from 'styles/responsive'

interface HeaderProps {
  fontSize: string
  white: boolean
}

const Header = styled.div<HeaderProps>`
  font-size: ${p => p.fontSize || '55px'};
  font-weight: 900;

  @media ${ON_MOBILE} {
    font-size: 40px;
  }

  ${p =>
    p.white &&
    css`
      color: white;
    `};
`

export default Header
