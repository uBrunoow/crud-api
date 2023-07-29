import React from 'react'
import Form from '../Form/Form'
import { ChevronsLeft } from 'lucide-react'

const AddUser = () => {
  return (
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
          <h2 className="text-dark">New User</h2>
          <span className="text-dark">
            Use the below form to create a new account
          </span>
        </div>

        <Form />
      </div>
    </main>
  )
}

export default AddUser
