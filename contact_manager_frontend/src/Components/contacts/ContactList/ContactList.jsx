import React, { useEffect, useState } from 'react'
import { Link, json, useParams } from 'react-router-dom'
import ContactServices from '../../ContactServices/ContactServices'
import Spinner from '../../Spinner/Spinner'

const ContactList = () => {
  // let { contactId } = useParams()
  let [query, setQuery] = useState({
    text: ""
  })
  let [state, setState] = useState({
    contacts: [],
    filteredContact:[],
    loading: false,
    errorMessage: ""
  })

  useEffect(() => {
    let promise = new Promise((res, rej) => {
      setState({ ...state, loading: true })
      let response = ContactServices.getAllContacts();
      res(response)
      rej("error")
    })
    promise.then((res1) => {
      setState({ ...state, loading: false, contacts: res1.data, filteredContact:res1.data })
    }).catch((rej1) => {
      setState({ ...state, loading: false, errorMessage: alert("data is not available") })
    })
  }, [])

  let { contacts, loading, filteredContact, errorMessage } = state;
  console.log(contacts)

  //delete handle

  let clickDelete = (contactId)=>{
    let promise = new Promise((res, rej)=>{
      let deleteContact = ContactServices.deleteContact(contactId);
      res(deleteContact)
    })
    promise.then((res1)=>{
      if (res1) {
        let prom1 = new Promise((res, rej) => {
          setState({ ...state, loading: true})

          let response = ContactServices.getAllContacts();
          res(response)
          // rej("error")
        }).then((res1) => {
          setState({ ...state, loading: false, contacts: res1.data, filteredContact:res1.data })
        }).catch(() => {
          setState({ ...state, loading: false, errorMessage: alert("data is not available") })
        })
      }
    })
  }

  //Search handle 
  let searchContact=(event)=>{
    setQuery({...query, text: event.target.value})
    let theContact=state.contacts.filter((contact)=>{
      return contact.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    console.log(theContact)
    setState({...state, filteredContact:theContact})
  }
  return (

    <div>
      {/* <pre>
        {JSON.stringify(contacts)}
      </pre> */}
      <section className="contact-search p-3">
        <div className="container">
          <div className="grid">

            <div className="row">
              <p className="h3">Contact Manager <Link to={'/contacts/add'} className='btn btn-primary me-2'><i className='fa fa-plus-circle me-2'></i>New</Link> </p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis iure mollitia consectetur praesentium aliquid eius, neque quisquam fugiat veniam repellat, atque voluptatem omnis natus architecto cumque iusto aut. Adipisci, labore?</p>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-8 mb-2">
                    <input type="search" name="text" value={query.text} onChange={searchContact}  placeholder='Search Names..' id="" className='form-control' />
                  </div>
                  <div className="col mb-2">
                    <input type="submit" value="Search" className='btn btn-outline-dark' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-card">
        <div className="container">
          <div className="row d-flex justify-space-between">
            {
              loading ? <Spinner /> : <React.Fragment>
                {
                  filteredContact.length > 0 &&
                  filteredContact.map((contact) => {
                    return (
                      <div className="col-md-6">
                        <div className="row">
                          <div className="card my-3">
                            <div className="card-body">
                              <div className="row d-flex align-items-center">
                                <div className="col-md-4">
                                  <img src={contact.photo} alt="" className='img-fluid contact-img' />
                                </div>
                                <div className="col-md-7">
                                  <ul className="list-group">
                                    <li className="list-group-item list-group-item-action">Name: <span className='fw-bold ms-1'>{contact.name}</span></li>
                                    <li className="list-group-item list-group-item-action">Email: <span className='fw-bold ms-1'>{contact.email}</span></li>
                                    <li className="list-group-item list-group-item-action">Contact: <span className='fw-bold ms-1'>{contact.contact}</span></li>
                                  </ul>
                                </div>
                                <div className="col-md-1 d-flex flex-column p-1">
                                  <Link to={`/contacts/view/${contact.id}`} className='btn btn-warning my-1'><i className='fa fa-eye'></i></Link>
                                  <Link to={`/contacts/edit/${contact.id}`} className='btn btn-primary my-1'><i className='fa fa-pen'></i></Link>
                                  <button className="btn btn-danger my-1" onClick={()=>{clickDelete(contact.id)}} ><i className='fa fa-trash'></i></button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </React.Fragment>
            }

          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactList