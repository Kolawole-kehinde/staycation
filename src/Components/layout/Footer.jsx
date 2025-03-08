import React from 'react'

const Footer = () => {
  return (
    <section className='border-t border-bg-secondary-100 mt-10'>
    <footer className="w-full max-w-[1076px] py-10 mx-auto px-4 lg:px-0">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-6">

      <div>
        <h1 className="text-2xl leading-[36px] font-medium">
          <span className="text-primary-100">Stay</span>cation.
        </h1>
        <p className="text-lg leading-[27px] text-secondary mt-4">
          We kaboom your beauty holiday instantly and memorable.
        </p>
      </div>
  
 
      <div>
        <h4 className="text-lg leading-[27px] text-primary mb-3">For Beginners</h4>
        <ul className="text-base font-light text-secondary space-y-2">
          <li>
            <a href="#" className="hover:text-primary-100 transition-colors duration-200">New Account</a>
          </li>
          <li>
            <a href="#" className="hover:text-primary-100 transition-colors duration-200">Book a Room</a>
          </li>
          <li>
            <a href="#" className="hover:text-primary-100 transition-colors duration-200">Payments</a>
          </li>
        </ul>
      </div>
  
   
      <div>
        <h4 className="text-lg leading-[27px] text-primary mb-3">Explore Us</h4>
        <ul className="text-base font-light text-secondary space-y-2">
          <li>
            <a href="#" className="hover:text-primary-100 transition-colors duration-200">About</a>
          </li>
          <li>
            <a href="#" className="hover:text-primary-100 transition-colors duration-200">Privacy Policy</a>
          </li>
          <li>
            <a href="#" className="hover:text-primary-100 transition-colors duration-200">Terms & Conditions</a>
          </li>
        </ul>
      </div>
  
   
      <div>
        <h4 className="text-lg leading-[27px] text-primary mb-3">Getting Touch</h4>
        <ul className="text-base font-light text-secondary space-y-2">
          <li>support@staycation.id</li>
          <li>021 - 2208 - 1996</li>
          <li>Staycation Oy, Jakarta</li>
        </ul>
      </div>
    </div>
  

    <p className="text-base font-light text-secondary text-center mt-10">
      Copyright &copy; 2019. All rights reserved. Staycation.
    </p>
  </footer>
  </section>
  )
}

export default Footer
