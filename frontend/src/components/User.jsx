import React, { useContext } from 'react'
import { Context } from '../contexts/Context'

const User = () => {
  const {user}=useContext(Context);
  console.log(user?.user?.name)
  return (
    <div className='flex items-center gap-2'>
      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="User" className='w-[30px] h-[30px]' />
      <span className='font-bold'>{user?.user?.name}</span>
    </div>
  )
}

export default User
