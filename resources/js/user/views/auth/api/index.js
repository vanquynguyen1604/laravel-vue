export function apiGetAuth() {
    return axios.get('/authenticate')
        .then(response => response)
        .catch(xhr => xhr)
}

export function apiChangePassword(params = {}) {
    return axios.put('/me/change-password', params)
        .then(response => response)
        .catch(xhr => xhr)
}
