import React from 'react'
import { expect } from 'chai'
import { mount, shallow, render } from 'enzyme'
import About from '../../src/js/components/about'

describe('<About />', () => {
  let about = shallow(<About />)

  it('should render', () => {
    expect(about.find('h1').text()).to.equal('About')
  })
})
