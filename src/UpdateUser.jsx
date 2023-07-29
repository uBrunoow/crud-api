import React, { useState } from 'react'
import Header from './components/Header/Header'
import { ChevronsLeft } from 'lucide-react'
import updateUser from './api/updateUser'
import { useParams } from 'react-router-dom'

const UpdateUser = () => {
  const [updName, setUpdName] = useState('')
  const [updEmail, setUpdEmail] = useState('')
  const [updGender, setUpdGender] = useState('')
  const [updStatus, setUpdStatus] = useState('')

  const handleGenderChange = (value) => {
    setUpdGender(value)
  }

  const handleStatusChange = (value) => {
    setUpdStatus(value)
  }

  const { id } = useParams()

  const updatedData = {
    name: updName,
    email: updEmail,
    gender: updGender,
    status: updStatus,
  }

  Object.keys(updatedData).forEach((key) => {
    if (!updatedData[key]) {
      delete updatedData[key]
    }
  })

  const handleUpdateUser = async (e) => {
    e.preventDefault()
    const response = await updateUser(id, updatedData)
    console.log(response)
    window.location.href = '/'
  }

  return (
    <>
      <Header />
      <main id="site-main">
        <div className="container">
          <div className="box-nav d-flex justify-between">
            <div className="filter">
              <a href="/" className="flex-title">
                <ChevronsLeft className="user_icon" /> All Users
              </a>
            </div>
          </div>
          <div className="form-title text-center">
            <h2 className="text-dark">Update User</h2>
            <span className="text-light">
              Use the below form to Update an account
            </span>
          </div>

          <form id="update_user" onSubmit={handleUpdateUser}>
            <div className="new_user">
              <div className="form-group">
                <label htmlFor="name" className="text-light">
                  Name
                </label>
                <input type="hidden" name="id" value="" />
                <input
                  type="text"
                  name="name"
                  value={updName}
                  placeholder="Mark Stoenis"
                  onChange={({ target }) => setUpdName(target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Email" className="text-light">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={updEmail}
                  placeholder="example@gmail.com"
                  onChange={({ target }) => setUpdEmail(target.value)}
                />
              </div>
              <div className="form-group-gender">
                <label htmlFor="gender" className="text-soft-light">
                  Gender
                </label>
                <div className="radio inline">
                  <input
                    type="radio"
                    id="radio-2"
                    name="gender"
                    value="Male"
                    checked={updGender === 'Male'}
                    onChange={() => handleGenderChange('Male')}
                  />
                  <label htmlFor="radio-2" className="radio-label">
                    Male
                  </label>
                </div>
                <div className="radio inline">
                  <input
                    type="radio"
                    id="radio-3"
                    name="gender"
                    checked={updGender === 'Female'}
                    onChange={() => handleGenderChange('Female')}
                  />
                  <label htmlFor="radio-3" className="radio-label">
                    Female
                  </label>
                </div>
              </div>

              <div className="form-group-status">
                <label htmlFor="gender" className="text-soft-light">
                  Status
                </label>
                <div className="radio inline">
                  <input
                    type="radio"
                    id="radio-4"
                    name="status"
                    value="Active"
                    checked={updStatus === 'Active'}
                    onChange={() => handleStatusChange('Active')}
                  />
                  <label htmlFor="radio-4" className="radio-label">
                    Active
                  </label>
                </div>
                <div className="radio inline">
                  <input
                    type="radio"
                    id="radio-5"
                    name="status"
                    value="Inactive"
                    checked={updStatus === 'Inactive'}
                    onChange={() => handleStatusChange('Inactive')}
                  />
                  <label htmlFor="radio-5" className="radio-label">
                    Inactive
                  </label>
                </div>
              </div>

              <div className="form-group">
                <button type="submit" className="btn text-dark update">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default UpdateUser
