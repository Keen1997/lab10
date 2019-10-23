let URL = 'https://us-central1-mobile-lab10.cloudfunctions.net/findProduct'

export default (name) => {
    return fetch(URL + '?name=' + name).then((res) => {
        return res.json()
    })
}

// export default function(name) {
// 	return fetch(URL+'?name='+name).then(function(response) {
// 		return response.text();
// 	}).then(function(text) {
//         let json = JSON.parse(text);
//         console.log(json);
// 		return json;
// 	});
// }