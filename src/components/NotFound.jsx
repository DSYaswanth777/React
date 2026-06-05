import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <>
    <h1>404 - Page Not found</h1>

    <Link to='/'>Go back</Link>
    
    </>
  )
}

export default NotFound