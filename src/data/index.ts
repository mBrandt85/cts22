import news from './news.json'

export interface News {
  date: string
  title: string
  message: string
}

export function getNews(): any {
  return news.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
}

export function getLatestNews(): News[] {
  return getNews().slice(0, 3)
}