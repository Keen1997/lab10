const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

exports.findProduct = functions.https.onRequest((req, res) => {
    return admin.database().ref('products').once('value', (snapshot) => {
        var products = snapshot.val()

        let productName = req.query.name

        checkProduct2(products, productName, res)
    })
})

let checkProduct = function(nameQueryString, product) {
    if(nameQueryString == product.name) {
        return product.price;
    }
}

let checkProduct2 = function(products, productName, res) {
    let price
    products.forEach(product => {
        if(checkProduct(productName, product)) {
            price = checkProduct(productName, product)
            console.log(price);
            res.send(price.toString)
        } 
    }, () => {
        res.send('product not found')
    })
}