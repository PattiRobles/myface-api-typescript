import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { PostList } from './PostList/PostList'
import { BrowserRouter as Router, Routes, Route, Link, useParams} from 'react-router-dom'
import { UserList } from './UserList/UserList'
import { NavBar } from './NavBar/NavBar'
import { CreatePost } from './CreatePost/CreatePost'
import { CreateUser } from './CreateUser/CreateUser'
import { UserDetail } from './UserDetail/UserDetail'

function App() {

  const params = useParams();
  console.log(params)

  return (
    <Router>
      <div>
      <NavBar />
      </div>
      <h1>MyFace App</h1>
      <Routes>

        <Route path="/posts" element={
          <div>
            <h2>Loaded with Routers!</h2>
            <PostList />
          </div>} />

        <Route path="/users" element={
          <div>
          <h2>Users</h2>
          <UserList />
          </div>} />

        <Route path="/posts/create" element={
          <div>
          <h2>Create Posts </h2>
          <CreatePost />
          </div>} />

          <Route path="/users/create" element={
          <div>
          <h2>Create User</h2>
          <CreateUser />
          </div>} />

          <Route path="users/:userId" element={
            <div>
              <UserDetail />
            </div>} />

        <Route path="*" element={
          <PostList />} />
      </Routes>
    </Router>
  )
}

export default App