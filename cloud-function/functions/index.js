const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

exports.findProduct = functions.https.onRequest((req, res) => {
    return admin.database().ref('products').once('value', (snapshot) => {
        let products = snapshot.val()

        let productName = req.query.name

        test(productName, products, res)
    })
})


let test = async function(productName, products, res) {
    let price = 0
    await products.forEach(product => {
        if(product.name == productName) {
            price = product.price;
        }
    })

    await res.json({'price': price.toString()})
}

