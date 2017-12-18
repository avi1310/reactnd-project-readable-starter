const API = "http://localhost:3001"

const myHeaders = new Headers({
    'Authorization': 'whatever-you-want',
})


export function fetchPosts () {
    return fetch(`${API}/posts`, {headers: myHeaders})
        .then(response => response.json())
}

export function fetchCategories () {
    return fetch(`${API}/categories`, {headers: myHeaders})
        .then(response => response.json())
}



export function votePost (id, option) {
    return fetch(`${API}/posts/${id}`, {
        headers: myHeaders,
        method: "POST",
        body: JSON.stringify(option)
    });
}