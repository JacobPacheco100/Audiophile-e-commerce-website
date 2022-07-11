// quantity box

const quantity = document.querySelector(".quantity")
const item_quantity = document.querySelector(".quant")

let edit_quantity = 1
item_quantity.textContent = edit_quantity

quantity.addEventListener("click", (event) => {
  const e = event.target.classList

  if (e.contains("add")) {
    edit_quantity += 1
    item_quantity.textContent = edit_quantity
  } else if (e.contains("less")) {
    if (edit_quantity <= 1) {
      edit_quantity = 1
    } else {
      edit_quantity -= 1
      item_quantity.textContent = edit_quantity
    }
  }
})

// shopping cart
