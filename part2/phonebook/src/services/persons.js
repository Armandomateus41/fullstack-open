import axios from 'axios'

const baseUrl = '/api-phonebook/persons'
const getAll = (signal) => axios.get(baseUrl, { signal }).then(response => response.data)
const create = person => axios.post(baseUrl, person).then(response => response.data)
const update = (id, person) => axios.put(baseUrl + '/' + encodeURIComponent(id), person).then(response => response.data)
const remove = id => axios.delete(baseUrl + '/' + encodeURIComponent(id))
export default { getAll, create, update, remove }

