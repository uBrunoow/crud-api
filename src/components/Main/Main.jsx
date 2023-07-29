import React, { useState, useEffect } from 'react'
import { User, PencilIcon, X } from 'lucide-react'
import fetchUsers from '../../api/fetchUser'
import deleteUser from '../../api/deleteUser'
import { Link } from 'react-router-dom'

const Main = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    // Recupera a lista de usuários da API ao montar o componente
    async function getUsers() {
      const usersData = await fetchUsers()
      setUsers(usersData)
    }
    getUsers()
  }, [])

  const handleDeleteUser = async (userId) => {
    try {
      await deleteUser(userId)
      // Atualiza o array de usuários removendo o usuário com o _id correspondente
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId))
      window.location.reload()
    } catch (error) {
      // Trate o erro, se necessário
    }
  }

  return (
    <>
      <div id="site-main">
        <div className="container">
          <div className="box-nav d-flex justify-between">
            <a href={'/add-user'} className="border-shadow">
              <span className="text-gradient flex-span">
                New User <User className="user_icon" />
              </span>
            </a>
          </div>

          <form action="/" method="POST">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>@Email</th>
                  <th>Gender</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="tr-special">
                    <td>{user.counter}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>{user.status}</td>
                    <td className="special-td">
                      <div className="flex-container">
                        <Link to={`/update/${user._id}`}>
                          <span className="uptade border-shadow">
                            <PencilIcon className="actions_icons" />
                          </span>
                        </Link>
                        <a className="">
                          <span
                            className="delete border-shadow"
                            onClick={() => handleDeleteUser(user._id)}
                          >
                            <X className="actions_icons" />
                          </span>
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  )
}

export default Main
