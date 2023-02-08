import { getProducts } from "./database.js"



document.addEventListener(
    "click",  
    (clickEvent) => {
        
        const itemClicked = clickEvent.target

        
        if (itemClicked.id.startsWith("product")) {

            
            const [,productsId] = itemClicked.id.split("--")

            
            for (const product of products) {

                /*
                    Compare the primary key of each walker to the one
                    you have. As soon as you find the right one, display
                    the window alert message.
                */
                if (product.id === parseInt(productsId)) {
                    window.alert(`${product.name} costs $${product.price}`)
                }
            }
        }
    }
)


const products = getProducts()


export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

