async function populate() {
  const url = "/js/data.json"
  const request = new Request(url)

  const response = await fetch(request)
  const data = await response.json()

  // headphones(data)
  speakers(data)
  // earphones(data)
}

function headphones(data) {
  const data1 = document.getElementById("data1")
  const data2 = document.getElementById("data2")
  const data3 = document.getElementById("data3")

  showProducts(data1, data, 1)
  showProducts(data2, data, 2)
  showProducts(data3, data, 3)
}

function speakers(data) {
  const data4 = document.getElementById("data4")
  const data5 = document.getElementById("data5")

  showProducts(data4, data, 4)
  showProducts(data5, data, 5)
}

function earphones(data) {
  const data0 = document.getElementById("data0")
  showProducts(data0, data, 1)
}

function showProducts(card, data, object) {
  const productName = card.querySelector("h2")
  const productDescription = card.querySelector("p")

  productName.textContent = data[object].name
  productDescription.textContent = data[object].description
}

populate()

// create a function that takes in array of objects (array containing relevent page products)
