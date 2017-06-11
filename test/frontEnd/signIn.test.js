import React from 'react'
import { expect } from 'chai'
import { mount, shallow, render } from 'enzyme'
import SignIn from '../../src/js/components/signIn'

describe('<SignIn />', () => {
  let signIn = shallow(<SignIn />)

  it('should render', () => {
    expect(signIn.find('h1').text()).to.equal('SignIn')
  })
})
