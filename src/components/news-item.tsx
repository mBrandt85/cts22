import styled from "styled-components"

const StyledNews = styled.div`
  padding-bottom: 1rem;
  border-bottom: .05rem solid lightgray;
`

export default function NewsItem({ data: { title, date, message }}: { data: any }) {
  return (
    <StyledNews>
      <h3 style={{ margin: '1rem 0 0 0' }}>
        <span style={{ fontSize: '1rem' }}>{title}</span>
        <span style={{ fontSize: '.9rem', fontWeight: '400' }}>{` @ ${new Date(date).getDate()}/${new Date(date).getMonth()}/${new Date(date).getFullYear()} ${new Date(date).getHours()}:${new Date(date).getMinutes()}`}</span>
      </h3>
      <p style={{ margin: 0 }}>{message}</p>
    </StyledNews>
  )
}