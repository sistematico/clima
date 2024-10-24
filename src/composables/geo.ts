export async function useGeo(ip: string) {
  const url = `https://tools.keycdn.com/geo.json?host=${ip}`
  
  // const headers = new Headers({
  //   'Accept': 'application/json',
  //   'Content-Type': 'application/json',
  //   'User-Agent': `keycdn-tools:${window.location.href}`,
  //   'Access-Control-Allow-Origin': window.location.href
  // })
  const headers = new Headers({
    'User-Agent': `keycdn-tools:${window.location.href}`
    // 'Access-Control-Allow-Origin': window.location.href
  })

  return await (await fetch(url, { method: 'get', headers })).json()
}