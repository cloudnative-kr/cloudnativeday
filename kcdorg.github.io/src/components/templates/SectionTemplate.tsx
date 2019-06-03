import * as React from 'react'
import styled from 'styled-components'
import { ON_MOBILE } from '../atoms/Responsive'

const Wrapper = styled.div`
  padding-top: 60px;
  padding-bottom: 80px;
  border-top: 1px solid #e8e8e8;
`

export const IconRow = styled.div`
  display: flex;
  justify-content: center;
`

export const Icon = styled.span`
  color: #f83600;
`

export const Title = styled.h4`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  margin-top: 5px;

  @media ${ON_MOBILE} {
    font-size: 1.6rem;
  }
`

interface SectionTemplateProps {
  title: string
  iconClass: string
}

// iconClass example: fa fa-map-marker fa-3x
const SectionTemplate: React.StatelessComponent<SectionTemplateProps> = ({
  title,
  iconClass,
  children,
}) => (
  <Wrapper>
    <IconRow>
      <Icon className={iconClass} aria-hidden="true" />
    </IconRow>
    <Title>{title}</Title>
    {children}
  </Wrapper>
)

export default SectionTemplate
