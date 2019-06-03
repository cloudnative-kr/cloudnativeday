import * as React from 'react'
import styled from 'styled-components'
import SectionTemplate from './templates/SectionTemplate'

const Wrapper = styled.div`
  text-align: center;
`

const MetaInfo = styled.div`
  font-size: 16px;
  font-weight: 300;
  margin-top: 40px;
  color: #6b7584;
`

const InquirySection: React.StatelessComponent<{}> = () => (
  <SectionTemplate title="문의처" iconClass="">
    <Wrapper>
      대한민국 커뮤니티데이 행사 사무국<br />(입금 및 세금계산서 문의 제외)
      <MetaInfo>
        Tel: 017-277-0917<br />Email: spicalong@gmail.com
      </MetaInfo>
    </Wrapper>
  </SectionTemplate>
)

export default InquirySection
