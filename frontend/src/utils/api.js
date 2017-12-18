const API = "http://localhost:3001"

const myHeaders = new Headers({
    'Authorization': 'whatever-you-want',
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*'
})

export function fetchPosts () {
    return fetch(`${API}/posts`, {headers: myHeaders})
        .then(response => response.json())
}

export function fetchSinglePost (id) {
    return fetch(`${API}/posts/${id}`, {headers: myHeaders})
        .then(response => response.json())
}

export function fetchCategories () {
    return fetch(`${API}/categories`, {headers: myHeaders})
        .then(response => response.json())
}

export const addPostAPI = post =>
    fetch(`${API}/posts`, {
        method: "post",
        headers: myHeaders,
        body: JSON.stringify(post)
    }).then(res => res.json());

export const updateVotePost = (postId, vote) =>
fetch(`${API}/posts/` + postId, {
    method: `POST`,
    headers: myHeaders,
    body: JSON.stringify({ option: vote })
}).then(res => res.json());

export const updatePostAPI = (id, post) =>
    fetch(`${API}/posts/${id}`, {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify(post)
    }).then(res => res.json());
