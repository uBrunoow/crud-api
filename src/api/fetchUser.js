import { api } from './api'

const fetchUsers = async () => {
  try {
    const response = await api.get('/api/users')
    return response.data // Axios já faz o parsing para JSON
  } catch (error) {
    console.error('Erro ao obter os usuários:', error)
    return [] // Retorna um array vazio em caso de erro
  }
}

export default fetchUsers
