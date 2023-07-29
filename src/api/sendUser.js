import { api } from './api'

const sendUser = async (name, email, status, gender) => {
  try {
    const response = await api.post(
      '/api/users',
      {
        name,
        email,
        status,
        gender,
      },
      {
        headers: {
          'Content-Type': 'application/json', // Altere para 'application/json'
        },
      },
    )
    const data = response.data // Dados do usuário retornados pelo backend
    return data
  } catch (error) {
    console.error('Erro ao enviar os usuários:', error)
    return null // Retorna null em caso de erro
  }
}

export default sendUser
