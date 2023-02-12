import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import './NavBar/NavBar.scss'
import { PostList } from './PostList/PostList'
import { BrowserRouter as Router, Routes, Route, Link, useParams} from 'react-router-dom'
import { UserList } from './UserList/UserList'
import { NavBar } from './NavBar/NavBar'
import { CreatePost } from './CreatePost/CreatePost'
import { CreateUser } from './CreateUser/CreateUser'
import { UserDetail } from './UserDetail/UserDetail'
import Menu from './Menu/Menu'

function App() {

  return (
    <Router>
      <div>
      {/* <NavBar /> */}
      <Menu />
      </div>
      
      <Routes>

        <Route path="/posts" element={
          <div>
            <h1 className='list-title'>Posts</h1>
            <PostList />
          </div>} />

        <Route path="/users" element={
          <div>
          <h1 className='list-title'>Users</h1>
          <UserList />
          </div>} />

        <Route path="/posts/create" element={
          <div>
          <h2 className='create-title'>Create New Post </h2>
          <CreatePost />
          </div>} />

        <Route path="/users/create" element={
          <div>
          <h2 className='create-title'>Create New User</h2>
          <CreateUser />
          </div>} />

        <Route path="/users/:userId" element={
            <div>
            <UserDetail />
            </div>} />

        <Route path='/' element={
          <div><h1>Welcome to MyFace</h1>
          <h2>Navigate via Menu</h2></div>
            
           } />

        <Route path="*" element={
          <PostList />} />

      </Routes>
    </Router>
  )
}

export default App