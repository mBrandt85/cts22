import { useEffect, useState } from 'react'

export default function useMediaQuery(query: string) {
  const [match, setMatch] = useState<boolean>(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    const listener = () => setMatch(media.matches)

    if (media.matches !== match) setMatch(media.matches)

    media.addEventListener('change', listener)
    
    return () => media.removeEventListener('change', listener)
  }, [query, match])
  
  return match
}