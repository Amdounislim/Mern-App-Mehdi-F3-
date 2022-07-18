import React, { useEffect } from "react"
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser';
import UserCard from './components/UserCard';
import { getUsers } from './JS/actions/actionUser';

function App() {

  const dispatch = useDispatch()

  const users = useSelector(state => state.users)

  const getAllUsers = () => {
    dispatch(getUsers())
  }

  useEffect(() => {
    getAllUsers()
  }, [])


  return (
    <div className="App">
      <Link to='/users-list'>
        <Button variant="outline-primary button">Users List</Button>
      </Link>
      <Link to='/add-user' >
        <Button variant="primary button">Add User</Button>
      </Link>

      <Routes>
        <Route path='/users-list' element={<div className="contact-list">{
          users.map((el, index) => <UserCard user={el} key={el._id} />)
        }</div>} />
        <Route path='/add-user' element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
