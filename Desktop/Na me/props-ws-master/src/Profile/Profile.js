import React from 'react'

function Profile({fullName, bio, profession}) {
     function handleClick(){
        alert ({fullName})
    }
    return (
        <div>
            <h1>Fullname: {fullName}</h1>
            <button onClick={handleClick}></button>
            <h1>Bio: {bio}</h1>
            <h1>Profession: {profession}</h1>
            
        </div>
    )
}

export default Profile
