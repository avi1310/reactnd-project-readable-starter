const API = "http://localhost:3001"

const myHeaders = new Headers({
    'Authorization': 'whatever-you-want',
    'Content-Type': 'application/json'
})

let token = localStorage.token;
if (!token)
    token = localStorage.token = Math.random()
        .toString(36)
        .substr(-8);

const headers = {
    Accept: 'application/json',
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

export const addPostAPI = post =>
    fetch(`${API}/posts`, {
        method: "POST",
        headers: {
            ...headers,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    }).then(res => res.json());

export const updateVotePost = (postId, vote) =>
fetch(`${API}/posts/` + postId, {
    method: `POST`,
    headers: myHeaders,
    body: JSON.stringify({ option: vote })
}).then(res => res.json());
