import React from 'react'
import { expect } from 'chai'
import { mount, shallow, render } from 'enzyme'
import RandomMath from '../../src/js/components/randomMath'

describe('<RandomMath />', () => {
  let randomMath = mount(<RandomMath />)

  it('should render', () => {
    expect(randomMath.find('h1').text()).to.equal('Random Math')
  })
})
