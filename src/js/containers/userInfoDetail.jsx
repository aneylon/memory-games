import React from 'react'

const UserInfoDetail = (props) => (
  <li
    onClick={props.onClick}>
    <p>Name: {props.name}</p>
  </li>
)

export default UserInfoDetail
