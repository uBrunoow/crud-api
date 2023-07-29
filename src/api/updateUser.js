import { api } from './api'

const updateUsers = async (id, updatedData) => {
  try {
    const response = await api.put(`/api/users/${id}`, updatedData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.data
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error)
    return []
  }
}

export default updateUsers
