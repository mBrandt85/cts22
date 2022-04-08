import Layout from "../components/layout"
import { Title } from "../components/typography"
import { getNews } from "../data"
import NewsItem from "../components/news-item"

export default function News() {
  const news = getNews()
  
  return (
    <Layout title="News">

      <Title size="1.5rem" margin="2rem 0 1rem 0">NEWS</Title>
      {news.map((data, key) => <NewsItem key={key} data={data} />)}
    </Layout>
  )
}
