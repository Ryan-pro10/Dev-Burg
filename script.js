const list = document.querySelector('ul')
const BShowall = document.querySelector('.show-all')
const BMapall = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filAll = document.querySelector('.filter-all')

function formatValue(value){
  return newValue = value.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});
}

function showaAll(productArray) {
  let myLi = ''

  productArray.forEach((product) => {
    myLi += `
    <li>
       <img src=${product.src}>
       <p>${product.name}</p>
       <p class="item-price"> ${formatValue(product.price)}</p>
    </li>
  `
  })

  list.innerHTML = myLi

}

function Mall() {
  const newprice = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9,

  }))

  showaAll(newprice)
}

function sumAllItems() {
  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

   list.innerHTML = `
     <li>
       <p> Soma total dos valores: ${formatValue(totalValue)} </p>
     </li>
    `

}

function filAllItems() {
  const filJustVegan = menuOptions.filter((product) => product.vegan === true)

  showaAll(filJustVegan)
}


BShowall.addEventListener('click', () => showaAll(menuOptions))
BMapall.addEventListener('click', Mall)
sumAll.addEventListener('click', sumAllItems)
filAll.addEventListener('click', filAllItems)