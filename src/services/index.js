export const endpoint = 'http://www.vagalume.com.br'

export const get = (url) => {
    return fetch(`${endpoint}/${url}`, {mode: 'no-cors'})
        .then(data => data.json())
        .then(response => response)
}