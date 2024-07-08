/* ForEach Início*/
const list = document.querySelector("ul")
const buttonShowAll = document.querySelector(".show-all")
let myLi = ""
/* ForEach Fim*/


/* Map Início*/

const buttonMap = document.querySelector(".mapear")

/* Map Fim*/


/* Reduce Início*/

const buttonReduce = document.querySelector(".Somar")

/* Reduce Fim*/


/* Filter Início*/
const buttonFiltrar = document.querySelector(".Filtrar")
/* Filter Fim*/


const menuOptions = [
    { name: 'X-Salada', price: 30, vegan: false, src: './img/xsalada.jpeg' },
    { name: 'X-Bacon', price: 34, vegan: false, src: './img/xbacon.png' },
    { name: 'X-Bacon Egg', price: 39, vegan: false, src: './img/bacon-egg.png' },
    { name: 'Monstruoso', price: 50, vegan: false, src: './img/monstruoso.png' },
    { name: 'Big Vegano', price: 55, vegan: true, src: './img/xvegan.png' },
    { name: 'X-Vegan', price: 45, vegan: true, src: './img/monstruoso-vegan.png' },
    ]

function formatCurrency(value){
    const newValue = value.toLocaleString('pt-br',{
        style:'currency',
        currency:'BRL'
    })
    return newValue
}



/* ForEach Início*/
function showAll(productArray) {
    myLi = ""
    productArray.forEach((product) => {
        myLi += `

            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price">${formatCurrency(product.price)}</p>
            </li>
        
        
        `

    });
    list.innerHTML = myLi
}


buttonShowAll.addEventListener("click",() => showAll(menuOptions))

/* ForEach Fim*/


/* Map Início*/
function buttonMapall() {

   const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9 // 10 % de desconto
    }));

    showAll(newPrices)
//speed operator -> foi o que fiz acima
  
}


buttonMap.addEventListener("click",buttonMapall)

/* Map Fim*/




/* Reduce Início*/

function buttonReduceall() {
    myLi = ""
    const price = menuOptions.reduce((acumulador,valoratual) => {
       
        return acumulador + valoratual.price 
    },0);

    list.innerHTML = `

    <li>
        <p>${"A soma total dos produtos é R$ "}${formatCurrency(price)}</p>
        
    </li>


`



    
}

buttonReduce.addEventListener("click", buttonReduceall)


/* Reduce Fim*/




/* Filter Início*/


function buttonFiltrarall(){
   
    const newmenuOptions = menuOptions.filter( (product) => product.vegan)  

    showAll(newmenuOptions)

}


buttonFiltrar.addEventListener("click",buttonFiltrarall)

/* Filter Fim*/
