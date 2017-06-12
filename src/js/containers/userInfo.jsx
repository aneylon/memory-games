import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUser } from '../actions'
import { bindActionCreators } from 'redux'
import UserInfoDetail from './userInfoDetail'

class UserInfo extends Component {
  renderList () {
    return this.props.userInfo.map(info => {
      return (
          <UserInfoDetail
            key={info.key}
            onClick={()=>this.props.getUser(info)}
            name={info.name} />
      )
    })
  }

  render () {
    return (
      <div>
        <h1>User Info</h1>
        <ul>
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ userInfo }) {
  return {
    userInfo
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)
