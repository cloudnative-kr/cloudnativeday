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
  padding: 10px 60px 20px 60px;
  font-size: 24px;
  font-weight: bold;
  border: none;
  outline: none;
  transition: all 0.2s ease;
  color: #fff;
  background: none;

  &:last-of-type {
    margin-left: 20px;
  }

  ${p =>
    p.active &&
    css`
      border-bottom: 8px double #fff;
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
    table-layout: auto;
  }
`

const TRow = styled.tr``

const THeader = styled.th`
  padding: 8px;
  border: 1px solid #a4a4a4;
  min-width: 100px;
  word-break: keep-all;

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
    padding: 10px;
    min-width: 120px;
  }
`

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
  text-decoration: none;
  color: rgb(244, 160, 122);
  white-space: pre-wrap;
  word-break: keep-all;

  &:hover,
  &:focus {
    cursor: pointer;
    background: #2f323e;
  }
`

const Speaker = styled.div`
  color: #fff;
  font-size: 13px;
  margin-bottom: 5px;
`

interface Schedule {
  colSpan?: number
  rowSpan?: number
  title: string
  href?: string
  speakers: string[]
  video?: string
  material?: string
  tracks: string[]
  deckUrl?: string
  videoUrl?: string
  description: string
  speakerDetails?: {
    name: string
    affiliation: string
    bio: string
    imageUrl?: string
  }[]
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
              {close => (
                <ScheduleModal
                  session={{
                    time: row.time,
                    ...col,
                  }}
                  close={close}
                />
              )}
            </Popup>
            {/* <Title>{col.title}</Title> */}
            {col.speakers.map(s => (
              <Speaker key={s}>{s}</Speaker>
            ))}
            {col.deckUrl ? (
              <a href={col.deckUrl} target="_blank">
                발표자료
              </a>
            ) : (
              ''
            )}
            {col.deckUrl && col.videoUrl ? ' | ' : ''}
            {col.videoUrl ? (
              <a href={col.videoUrl} target="_blank">
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
          <TableWrapper>
            <Table>
              <thead>
                <TRow>
                  <THeader />
                  <THeader>Track 1 - T타워/SUPEX Hall</THeader>
                  <THeader>Track 2 - 페럼타워/페럼홀</THeader>
                  <THeader>Track 3 - 페럼타워 세미나실</THeader>
                  <THeader>Track 4 - 삼화타워 Room1</THeader>
                  <THeader>Track 5 - 삼화타워 Room2</THeader>
                  <THeader>Track 6 - 삼화타워 Room3</THeader>
                  <THeader>Track 7 - 삼화타워 Room4</THeader>
                </TRow>
              </thead>
              <tbody>
                {this.renderTableRows(
                  this.state.day === 'day1'
                    ? scheduleDay1Data.rows
                    : (scheduleDay2Data.rows as any),
                )}
              </tbody>
            </Table>
          </TableWrapper>
        </InnerContainer>
      </StyledContainer>
    )
  }
}

export default ScheduleSection
