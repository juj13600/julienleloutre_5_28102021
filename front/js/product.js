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