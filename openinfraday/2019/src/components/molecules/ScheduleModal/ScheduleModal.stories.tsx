import ScheduleModal from './ScheduleModal'
import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('AddEvent', module).add('default style', () => (
  <ScheduleModal close={() => {}} />
))
