let URL = 'https://us-central1-mobile-lab10.cloudfunctions.net/findProduct'

export default (name) => {
    return fetch(URL + '?name=' + name).then((res) => {
        return res.json()
    })
}