import React from 'react'
import { expect } from 'chai'
import { mount, shallow, render } from 'enzyme'
import SignUp from '../../src/js/components/signUp'

describe('<SignUp />', () => {
  let signUp = shallow(<SignUp />)

  it('should render', () => {
    expect(signUp.find('h1').text()).to.equal('SignUp')
  })
})
