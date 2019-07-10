import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Nav (){
  return(
    <div className='Nav' 
      style={{
        height: 80, 
        width: '100%', 
        backgroundColor: '#bada55', 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>

      <FontAwesomeIcon icon='rocket' style={{fontSize: '3em', marginLeft: 20}}/>
      <div style={{
        fontSize: '2em', 
        marginRight: 20, 
        color: 'black', 
        border: '1px solid black'
        }}
      >
        <Link to='/' style={{textDecoration: 'none'}}> Home </Link>
        <Link to='/Projects' style={{textDecoration: 'none'}}> Projects </Link>
        <Link to='/about' style={{textDecoration: 'none'}}> About </Link>
      </div>
    </div>
  )
}

export default Nav