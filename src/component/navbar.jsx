import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar bg-[#2E5077] px-4">
      {/* SIDEBAR */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a href='/'>Home</a></li>
            <li><a href='/store'>Store</a></li>
            <li><a href='/tiket'>Ticket</a></li>
          </ul>
        </div>
      </div>
      {/* AREMAPEDIA */}
      <div className="navbar-center">
        <a href='/' className="btn btn-ghost text-xl text-white">aremaPedia</a>
      </div>
      {/* Logo AREMA */}
      <div className="navbar-end">
        <div className="btn btn-ghost btn-circle">
          <img src="/img/pngegg.png" alt="Logo" className="h-10 w-10" />
        </div>
      </div>
    </div>
  )
}