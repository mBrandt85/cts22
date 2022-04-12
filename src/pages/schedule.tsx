import { FaHome } from 'react-icons/fa';

import Layout from "../components/layout"
import { Title } from "../components/typography"
import { getRooms, getSchedule } from  '../data'
import ScheduleItem from '../components/schedule-item';


export default function Schedule() {
  const schedule = getSchedule()
  const rooms = getRooms();
  
  return (
    <Layout title="Schedule">
       <Title size="1.5rem" margin="2rem 0 1rem 0">Schedule</Title>
       {schedule.map((session, i) => (
          <ScheduleItem key={i} session={session} roomCount={rooms.length} />
        ))}
    </Layout>
  )
}
