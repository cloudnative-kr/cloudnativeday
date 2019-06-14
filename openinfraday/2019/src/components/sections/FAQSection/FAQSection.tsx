import React, { FC } from 'react'
import styled from 'styled-components'
import Container, { InnerContainer } from '../../atoms/Container/Container'
import Header from '../../atoms/Header/Header'

const StyledContainer = styled(Container)`
  background: url('/backgrounds/stripes-light.png');
`

const ContactRow = styled.div`
  max-width: 800px;
  margin-top: 100px;
  border-left: 4px solid black;
  padding: 0 30px;

  a {
    color: #dc3b3b;
    text-decoration: none;
  }
`

const FAQSection: FC = () => {
  return (
    <StyledContainer>
      <InnerContainer>
        <Header>FAQ</Header>
        <ContactRow>
          <p>
            무통장 입금이나 단체 등록을 원하시는 분은{' '}
            <a href="mailto:jwon.ku@gmail.com">jwon.ku@gmail.com</a> 으로 연락을
            주시기 바랍니다
          </p>
          <br />
          <p>
            Open Infrastructure & Cloud Native Days Korea 2019 행사 운영과
            관련하여 문의가 있으신 경우 아래 연락처로 연락해 주세요.
          </p>
          <p>
            <a href="mailto:master@openinfradays.kr">master@openinfradays.kr</a>
          </p>
          <br />
          <p>기타 결제 관련 문의는 Festa로 연락해 주세요.</p>
          <p>
            <a href="mailto:help@festa.io">help@festa.io</a>
          </p>
          <br />
          <p>
            사전 등록에서 마감되지 않은 핸즈온 워크샵은 행사 현장에서도 신청하실
            수 있습니다.
          </p>
        </ContactRow>
      </InnerContainer>
    </StyledContainer>
  )
}

export default FAQSection
