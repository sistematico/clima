export async function useGeo(ip: string) {
  const url = `https://tools.keycdn.com/geo.json?host=${ip}`
  
  const headers = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': `keycdn-tools:${window.location.href}`
  })

  const data = await (await fetch(url, { headers })).json()
  return data
}