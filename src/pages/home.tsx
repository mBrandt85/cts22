import { FaHome } from 'react-icons/fa';

import Layout from "../components/layout"
import { Title } from "../components/typography"
import Logo from '../assets/logo-red.svg'
import { getNews } from "../data"
import NewsItem from "../components/news-item"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { getScheduleOverview } from  '../data'
import { getAllRooms } from  '../data'

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Roboto Condensed';
`

export default function Home() {
  const news = getNews()
  const schedule = getScheduleOverview()
  const rooms = getAllRooms()
  
  return (
    <Layout title="Hem">
      <StyledHeader>
        <img src={Logo} alt="CTS 2022" style={{ width: '6rem', height: '6rem', marginBottom: '2rem' }} />
        <span>Friday 1 October @ 8:00</span>
      </StyledHeader>

      <Title size="1rem">Latest News</Title>
      {news.slice(0, 3).map((data, key) => <NewsItem key={key} data={data} />)}
      
      <Title size="1.5rem" margin="2rem 0 1rem 0">Welcome to CTS 2022</Title>
      <p>You partake at CTS 2022 either from your home or together with colleagues at prepared locations. Information about locations at your office will come from your local CTS project manager well before the event.</p>
      <p>CTS 2022 will be live streamed through four different YouTube channels aka rooms. You see all common activities in a separate room called 'Aula Imaginarium'. Such as keynotes, interviews, small talk and break activities. The presentations, on the other hand, are broadcast in separate rooms according to the <Link to="/schedule">detailed schedule</Link></p>
      <Title size="1.5rem" margin="2rem 0 1rem 0">Rooms</Title>
      {rooms.map((room)=>  <a href={room.url}>
          <FaHome color="#800807" size={30}/>
          {room.name.toUpperCase()}
        </a>)}
      <Title size="1.5rem" margin="2rem 0 1rem 0">Schedule overview</Title>
      {schedule.map((s) => <p>{s.time} {s.text}</p>)}
    </Layout>
  )
}
