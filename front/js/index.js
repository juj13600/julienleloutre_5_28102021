//fonction de 
(async function items(){ //asyncrone  pour await
    const products =await getProducts() //recupere les articles avec fonction getproducts, attend que la promesse soit resolue
    console.log(products)
    for(product of products){
    montrerProduct(product)    //afficher les produits
    }
})()
function getProducts(product){          //Fonction pour recupéré article,
return fetch ('http://localhost:3000/API/products/') //fetch demande ou il doit chercher l'information, return les données
.then (res => res.json()) // si res alors traduit en json
.then (function(products){ // il retourne tous les articles
    return products

})
.catch (function (erreur){ //si l'api ne fonctionne pas, gere les erreurs
 alert(erreur)
})
}
// let product = document.getElementById("107fb5b75607497b96722bda5b504926");
// let card =document.getElementById('items');
items.innerHTML = "" // efface le contenu de l'exemple
function montrerProduct() { //fonction pour afficher les articles
    document.getElementById('items').innerHTML +=` <a href="./product.html?id=42${product._id}">
    <article>
      <img src="${product.imageUrl}" alt="${product.altTxt}">
      <h3 class="productName">${product.name}</h3>
      <p class="productDescription">${product.description}</p>
    </article>
    </a>`
    
}

// product.innerHTML =
// const items = document.getElementById('items')
// const firstContent = contents[0]; 
// let varr = document.getElementById('415b7cacb65d43b2b5c1ff70f3393ad1');
    //    console.log("variiiiiiiiiiiiiiiiiiiiiiii", varr);
    //    if (varr) varr.focus();
// console.log("couleur 1",data[0].colors[0])