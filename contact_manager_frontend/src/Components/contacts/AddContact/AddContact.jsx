import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ContactServices from '../../ContactServices/ContactServices'

const AddContact = () => {
  let navigate = useNavigate()
  let [state, setState] = useState({
    loading: false,
    contact: {
      name: "",
      photo: "",
      contact: "",
      email: "",
      title: "",
      company: "",
      groupId: "",
    },
    group: [],
    errorMessage: ""

  })

  const updateInput = (event) => {
    setState({
      ...state, contact: {
        ...state.contact,
        [event.target.name]: event.target.value
      }
    })
  }


  let { loading, contact, group, errorMessage } = state

  const submitForm = (event) => {
    event.preventDefault()
    let promise = new Promise((res, rej) => {
      let response = ContactServices.createContact(contact)
      res(response)
    })
    promise.then((res1) => {
      if (res1) {
        navigate("/", { replace: true })
      } else {
        navigate("contacts/add", { replace: false })
      }
    })
      .catch(() => {
        alert("data is not added")
      })
  }
  return (
    <div>
      <pre>
        {JSON.stringify(contact)}
      </pre>
      <section className="edit-contact">
        <div className="container p-3">
          <div className="row">
            <p className="fw-bold h4 text-success ">Add Contact</p>
            <p className="fst-italic">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde accusantium pariatur corporis rerum perspiciatis quas molestiae vero minus asperiores? Illo nam placeat, et illum animi accusamus accusantium nulla veniam iusto!
            </p>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-md-4">
              <form action="" onSubmit={submitForm}>
                <div className="mb-2">
                  <input type="text" name='name' value={contact.name} onChange={updateInput} placeholder='Name' className='form-control' />
                </div>
                <div className="mb-2">
                  <input type="text" name='photo' value={contact.photo} onChange={updateInput} placeholder='Photo URL' className='form-control' />
                </div>
                <div className="mb-2">
                  <input type="number" name='contact' value={contact.contact} onChange={updateInput} placeholder='Mobile' className='form-control' />
                </div>
                <div className="mb-2">
                  <input type="email" name='email' value={contact.email} onChange={updateInput} placeholder='Email' className='form-control' />
                </div>
                <div className="mb-2">
                  <input type="text" name='company' value={contact.company} onChange={updateInput} placeholder='Company' className='form-control' />
                </div>
                <div className="mb-2">
                  <input type="text" name='title' value={contact.title} onChange={updateInput} placeholder='Title' className='form-control' />
                </div>
                <div className="mb-2">
                  <input type="text" name='groupId' value={contact.groupId} onChange={updateInput} placeholder='Group Id' className='form-control' />
                </div>
                <div className="mb-2">
                  <input type="submit" value={'Create'} className='btn btn-success' />
                  <Link to={'/'} className='btn btn-danger ms-2'>Cancel</Link>
                </div>
              </form>
            </div>
            <div className="col-md-8">
              <img src={contact.photo} className='img-fluid contact-img' alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AddContact