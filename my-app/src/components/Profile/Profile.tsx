import React from 'react';
import Image from 'next/image'
import './Profile.css';
import img from '../../../public/aaron.jpg'

const user = {
    name: 'Aaron Ross',
    imageUrl: img,
    imageSize: 200,
  };
  
  
  export default function Profile() {
  
    return (
      <>
        <h1>{user.name}</h1>
        <Image
            alt={'Photo of ' + user.name}
            src={user.imageUrl}
            width={user.imageSize}
            height={user.imageSize}
        />
      </>
  
    )
  }