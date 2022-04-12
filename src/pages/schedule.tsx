import { FaHome } from 'react-icons/fa';

import Layout from "../components/layout"
import { Title } from "../components/typography"
import { getNews } from "../data"
import NewsItem from "../components/news-item"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { getSchedule } from  '../data'

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Roboto Condensed';
`

export default function Schedule() {
  const schedule = getSchedule()
  
  return (
    <Layout title="Schedule">
       <Title size="1.5rem" margin="2rem 0 1rem 0">Schedule</Title>
    </Layout>
  )
}
