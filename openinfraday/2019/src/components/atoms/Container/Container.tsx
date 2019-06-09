import styled from 'styled-components/macro'
import { ON_MOBILE } from '../../../constants/responsive'

export default styled.div`
  padding: 70px 90px 90px 90px;

  @media ${ON_MOBILE} {
    padding: 60px 30px;
  }
`

export const InnerContainer = styled.div`
  max-width: 1220px;
  margin: auto;
`
