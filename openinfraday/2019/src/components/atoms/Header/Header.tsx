import styled, { css } from 'styled-components/macro'
import { ON_MOBILE } from '../../../constants/responsive'

interface HeaderProps {
  fontSize?: string
  white?: boolean
}

const Header = styled.div<HeaderProps>`
  font-size: ${p => p.fontSize || '55px'};
  font-weight: 900;
  line-height: 1.25;

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
