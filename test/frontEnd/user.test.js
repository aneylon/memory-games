import React from 'react'
import { expect } from 'chai'
import { mount, shallow, render } from 'enzyme'
import User from '../../src/js/components/user'

describe('<User />', () => {
  let user = shallow(<User />)

  it('should render', () => {
    expect(user.find('h1').text()).to.equal('User Info')
  })
})
