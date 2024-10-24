export async function useForecast(lat: string, lon: string) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m,rain,cloud_cover`
  return await (await fetch(url)).json()
}