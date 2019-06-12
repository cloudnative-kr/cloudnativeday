import React, { FC } from 'react'
import styled from 'styled-components/macro'
import { ON_DESKTOP } from 'constants/responsive'
import { CloseO } from 'styled-icons/evil/CloseO'

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #2f323e;

  @media ${ON_DESKTOP} {
    width: 80%;
    height: 85%;
    position: absolute;
  }
`

const CloseButton = styled(CloseO)`
  cursor: pointer;
  position: absolute;
  display: block;
  padding: 10px 15px;
  line-height: 20px;
  right: 0px;
  top: 0px;
`

interface ScheduleModalProps {
  close: () => void
}

const ScheduleModal: FC<ScheduleModalProps> = ({ close }) => (
  <>
    <ModalWrapper />
  </>
)

export default ScheduleModal
