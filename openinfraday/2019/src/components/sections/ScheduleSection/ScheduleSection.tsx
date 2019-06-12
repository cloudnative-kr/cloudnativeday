import React, { PureComponent, Fragment, MouseEvent } from 'react'
import styled, { css } from 'styled-components/macro'
import Container, { InnerContainer } from '../../atoms/Container/Container'
import Header from '../../atoms/Header/Header'
import scheduleDay1Data from '../../../data/schedule_day1.json'
import scheduleDay2Data from '../../../data/schedule_day2.json'
import { ON_MOBILE } from '../../../constants/responsive'
import Popup from 'reactjs-popup'
import ScheduleModal from 'components/molecules/ScheduleModal/ScheduleModal'

const StyledHeader = styled(Header)`
  color: #fff;

  /* span {
    background-color: yellow;
  } */
`

const StyledContainer = styled(Container)`
  background-color: rgba(31, 26, 50, 1);
`

const DayButtonRow = styled.div`
  padding: 20px 0;
`

const DayButton = styled.button<{ active: boolean }>`
  padding: 10px 60px;
  font-size: 24px;
  font-weight: bold;
  border: none;
  outline: none;
  transition: all 0.2s ease;

  &:last-of-type {
    margin-left: 20px;
  }

  ${p =>
    p.active &&
    css`
      background: url('/icons/carrot.svg') no-repeat left;
      background-size: 30px;
    `};

  ${p =>
    !p.active &&
    css`
      &:hover {
        background: #e8e8e8;
      }
    `};

  @media ${ON_MOBILE} {
    font-size: 20px;
    padding: 10px 40px;
    background-size: 20px;
  }
`

const TableWrapper = styled.div`
  overflow: auto;
  margin-top: 40px;
`

const Table = styled.table`
  width: 100%;
  min-width: 600px;
  border-top: 5px double #fff;
  border-bottom: 4px double #fff;
  border-collapse: collapse;

  font-size: 14px;
  table-layout: fixed;
  color: #fff;

  @media ${ON_MOBILE} {
    font-size: 13px;
  }
`

const TRow = styled.tr``

const THeader = styled.th`
  padding: 8px;
  border: 1px solid #a4a4a4;
  min-width: 100px;

  @media ${ON_MOBILE} {
    padding: 4px;
    min-width: 100px;
  }
`

const TData = styled.td`
  padding: 30px 15px;
  text-align: left;
  border: 1px solid #a4a4a4;

  .popup-content {
    padding: 0px !important;
    border: 0px !important;
    background: transparent !important;
    width: auto !important;
    /* min-width: 400px; */
  }

  @media ${ON_MOBILE} {
    padding: 5px;
  }
`

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
  text-decoration: none;
  color: rgb(244, 160, 122);
`

const Speaker = styled.div`
  color: #fff;
  font-size: 13px;
`

const TableLabel = styled.div`
  text-align: right;
  font-size: 24px;

  @media ${ON_MOBILE} {
    font-size: 18px;
  }
`

interface Schedule {
  colSpan?: number
  rowSpan?: number
  title: string
  href?: string
  speakers: string[]
  video?: string
  material?: string
}

interface ScheduleRow {
  time: string
  cols: Schedule[]
}

class ScheduleSection extends PureComponent {
  state = {
    day: 'day1',
  }

  setDay = (day: string) => {
    this.setState({ day })
  }

  renderTableRows = (data: ScheduleRow[]) => {
    return data.map(row => (
      <TRow key={row.time}>
        <THeader>{row.time}</THeader>
        {row.cols.map((col, i) => (
          <TData key={i} colSpan={col.colSpan} rowSpan={col.rowSpan || 1}>
            <Popup
              trigger={<Title>{col.title}</Title>}
              modal={true}
              closeOnDocumentClick={true}
            >
              {close => <ScheduleModal close={close} />}
            </Popup>
            {col.speakers.map(s => (
              <Speaker key={s}>{s}</Speaker>
            ))}
            {col.material ? (
              <a href={col.material} target="_blank">
                발표자료
              </a>
            ) : (
              ''
            )}
            {col.material && col.video ? ' | ' : ''}
            {col.video ? (
              <a href={col.video} target="_blank">
                영상
              </a>
            ) : (
              ''
            )}
          </TData>
        ))}
      </TRow>
    ))
  }

  renderDay1Table = () => {
    return (
      <TableWrapper>
        <Table>
          <thead>
            <TRow>
              <THeader />
              <THeader>Track 1</THeader>
              <THeader>Track 2</THeader>
              <THeader>Track 3</THeader>
              <THeader>Track 4</THeader>
              <THeader>Track 5</THeader>
              <THeader>Track 6</THeader>
              <THeader>Track 7</THeader>
            </TRow>
          </thead>
          <tbody>{this.renderTableRows(scheduleDay1Data.rows)}</tbody>
        </Table>
      </TableWrapper>
    )
  }

  renderDay2Table = () => {
    return (
      <Fragment>
        <TableWrapper>
          <TableLabel>Kubernetes Workshop & Sessions</TableLabel>
          <Table>
            <thead>
              <TRow>
                <THeader />
                <THeader>Room E5</THeader>
                <THeader>Room E6</THeader>
              </TRow>
            </thead>
            <tbody>{this.renderTableRows(scheduleDay2Data.workshop1)}</tbody>
          </Table>
        </TableWrapper>
        <TableWrapper>
          <TableLabel>Workshop / Deep Dive Sessions</TableLabel>
          <Table>
            <thead>
              <TRow>
                <THeader />
                <THeader>Room E1</THeader>
                <THeader>Room E2</THeader>
                <THeader>Room E3</THeader>
                <THeader>Room E4</THeader>
                <THeader>Room E7</THeader>
              </TRow>
            </thead>
            <tbody>{this.renderTableRows(scheduleDay2Data.workshop2)}</tbody>
          </Table>
        </TableWrapper>
      </Fragment>
    )
  }

  render() {
    return (
      <StyledContainer>
        <InnerContainer>
          <StyledHeader>
            <span>Schedule</span>
          </StyledHeader>
          <DayButtonRow>
            <DayButton
              onClick={() => this.setDay('day1')}
              active={this.state.day === 'day1'}
            >
              day 1
            </DayButton>
            <DayButton
              onClick={() => this.setDay('day2')}
              active={this.state.day === 'day2'}
            >
              day 2
            </DayButton>
          </DayButtonRow>
          {this.state.day === 'day1'
            ? this.renderDay1Table()
            : this.renderDay2Table()}
        </InnerContainer>
      </StyledContainer>
    )
  }
}

export default ScheduleSection
