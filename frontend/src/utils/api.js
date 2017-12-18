const API = "http://localhost:3001"

const myHeaders = new Headers({
    'Authorization': 'whatever-you-want',
})

let token = localStorage.token;
if (!token)
    token = localStorage.token = Math.random()
        .toString(36)
        .substr(-8);

const headers = {
    Authorization: token
};

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

export const addPostAPI = post =>
    fetch(`${API}/posts`, {
        method: "POST",
        headers: {
            ...headers,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    }).then(res => res.json());