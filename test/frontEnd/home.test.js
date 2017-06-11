import React from 'react'
import { expect } from 'chai'
import { mount, shallow, render } from 'enzyme'
import Home from '../../src/js/components/home'

describe('<Home />', () => {
  let home = shallow(<Home />)

  it('should render', () => {
    expect(home.find('h1').text()).to.equal('Memory Games')
  })
})
