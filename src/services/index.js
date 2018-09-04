export const endpoint = 'https://www.vagalume.com.br'

export const get = (url) => {
    return fetch(`${endpoint}/${url}`)
        .then(data => data.json())
        .then(response => response)
}