import { api } from './api'

const deleteUsers = async (id) => {
  try {
    const response = await api.delete(`/api/users/${id}`)
    return response.data // Axios já faz o parsing para JSON
  } catch (error) {
    console.error('Erro ao deletar usuário:', error)
    return [] // Retorna um array vazio em caso de erro
  }
}

export default deleteUsers
