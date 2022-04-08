import news from './news.json'

export interface News {
  date: string
  title: string
  message: string
}

export function getNews(): News[] {
  return news.sort((a, b) => Date.parse(b.date) > Date.parse(a.date) ? 1 : -1)
}

export function getLatestNews(quantity: number = 3): News[] {
  return getNews().slice(0, quantity)
}