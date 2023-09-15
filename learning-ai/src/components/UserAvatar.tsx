import { AvatarFallback } from '@radix-ui/react-avatar';
import { Avatar } from './ui/avatar';
import React from 'react'
import { User } from 'next-auth';

type Props = {
    user:User
}

const UserAvatar = ({user}: Props) => {
  return (
    <Avatar>
        {user.image ?(
            <div className='relative w-ful h-full aspect-square'></div>
        ) : (
            <AvatarFallback>
                <span className='sr-only'>{user?.name}</span>
            </AvatarFallback>
        )}
    </Avatar>
  )
}

export default UserAvatar;