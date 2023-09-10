import React from 'react'

const Footer = ({length}) => {
    const year = new Date();
  return (
    <main>
       <footer>Copyrights &copy; {year.getFullYear()} {length}</footer>
       <p></p>
    </main>
   
  )
}

export default Footer