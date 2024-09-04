import React, { useContext } from 'react'
import { UserContexts } from '../contexts/AuthContext'

const User = () => {
  const {user}=useContext(UserContexts);
  return (
    <div className='flex items-center gap-2'>
      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="User" className='w-[30px] h-[30px]' />
      <span className='font-bold'>{user.name}</span>
    </div>
  )
}

export default User
