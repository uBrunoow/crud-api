import React, { useState } from 'react'
import sendUser from '../../api/sendUser'

const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [status, setStatus] = useState('')

  const handleGenderChange = (value) => {
    setGender(value)
  }

  const handleStatusChange = (value) => {
    setStatus(value)
  }

  const handleSendUserManagement = async (e) => {
    e.preventDefault()
    const resInvalid = document.getElementById('res_invalid')

    if (name === '' || email === '' || gender === '' || status === '') {
      resInvalid.style.display = 'flex'
      setTimeout(function () {
        resInvalid.style.display = 'none'
      }, 5000)
    }

    const response = await sendUser(name, email, status, gender)
    console.log(response)
    if (response && response.user) {
      window.location.href = '/'
    }

    setName('')
    setEmail('')
    setGender('')
    setStatus('')
  }

  return (
    <form id="update_user" onSubmit={handleSendUserManagement}>
      <div className="res" id="res_invalid">
        <h1>Dados inválidos ou não preenchidos</h1>
      </div>
      <div className="new_user">
        <div className="form-group">
          <label htmlFor="name" className="text-soft-light">
            Name
          </label>
          <input type="hidden" name="id" value="" />
          <input
            type="text"
            value={name}
            placeholder="Mark Stoenis"
            onChange={({ target }) => setName(target.value)}
            className={'input_box'}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Email" className="text-soft-light">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            placeholder="example@gmail.com"
            className="input_box"
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
              checked={gender === 'Male'}
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
              value="Female"
              checked={gender === 'Female'}
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
              checked={status === 'Active'}
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
              checked={status === 'Inactive'}
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
  )
}

export default Form
