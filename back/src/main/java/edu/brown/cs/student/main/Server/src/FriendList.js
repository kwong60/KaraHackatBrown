import React from 'react'
import Friend from './Friend'

export default function FriendList({ friends }) {
    return( friends.map(friend => {
                return <Friend key = {friend} friend={friend} />
            })
    )
}

