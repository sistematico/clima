export async function useIp() {
  const data = await fetch('https://www.cloudflare.com/cdn-cgi/trace')
  const response = await data.text()
  const json = Object.fromEntries(
    response.trim().split('\n').map(line => line.split('='))
  )
  return json.ip
}