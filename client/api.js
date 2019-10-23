let url = 'https://us-central1-mobile-lab8.cloudfunctions.net/findProduct'

export default (name) => {
    return fetch(url+'?name='+name).then((res) => {
        if(res) {
            return res.text
        } else {
            return 'product not found'
        }
    })
}