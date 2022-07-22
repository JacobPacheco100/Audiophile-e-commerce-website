async function populate() {
  const url = "/js/data.json"
  const request = new Request(url)

  const response = await fetch(request)
  const data = await response.json() // <-- parsed data
}
