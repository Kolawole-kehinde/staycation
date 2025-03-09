import React from 'react'
import { Link } from 'react-router'

const Logo = () => {
  return (
    <Link to="/">
    <h1 className="text-2xl leading-[36px] font-medium">
      <span className="text-primary-100">Stay</span>cation.
    </h1>
  </Link>
  )
}

export default Logo
