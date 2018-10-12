export function callApiGeneral() {
    return axios.get('/statistics/general/')
        .then(response => response)
        .catch(xhr => xhr.response)
}
