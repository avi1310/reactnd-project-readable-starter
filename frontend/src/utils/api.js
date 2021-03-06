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
    fetch(`${API}/posts/${postId}`, {
        method: `post`,
        headers: myHeaders,
        body: JSON.stringify({'option': vote})
    }).then(res => res.json()).then(data => data)

export const updatePostAPI = (id, post) =>
    fetch(`${API}/posts/${id}`, {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify(post)
    }).then(res => res.json());

export function getCommentsAPI (id) {
    return fetch(`${API}/posts/${id}/comments`, {headers: myHeaders})
        .then(response => response.json())
}

export const updateCommentVoteAPI = (commentId, vote) =>
    fetch(`${API}/comments/${commentId}`, {
        method: `post`,
        headers: myHeaders,
        body: JSON.stringify({'option': vote})
    }).then(res => res.json()).then(data => data)

export const deleteCommentAPI = id =>
    fetch(`${API}/comments/${id}`, {
        method: "DELETE",
        headers: myHeaders
    })
        .then(res => res.json())
        .then(data => data);

export const deletePostAPI = id =>
    fetch(`${API}/posts/${id}`, {
        method: "DELETE",
        headers: myHeaders
    })
        .then(res => res.json())
        .then(data => data);

export const addCommentAPI = comment =>
    fetch(`${API}/comments`, {
        method: "post",
        headers: myHeaders,
        body: JSON.stringify(comment)
    }).then(res => res.json());

export const updateCommentAPI = (id, comment) =>
    fetch(`${API}/comments/${id}`, {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify(comment)
    }).then(res => res.json());
