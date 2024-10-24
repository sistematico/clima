export async function useForecast(lat: string, lon: string) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m,rain,cloud_cover`

  const headers = new Headers({
    'Access-Control-Allow-Origin': window.location.href
  })

  return await (await fetch(url, { headers })).json()
}