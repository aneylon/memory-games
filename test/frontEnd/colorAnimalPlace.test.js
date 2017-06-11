import React from 'react'
import { expect } from 'chai'
import { mount, shallow, render } from 'enzyme'
import ColorAnimalPlace from '../../src/js/components/colorAnimalPlace'

describe('<ColorAnimalPlace />', () => {
  let colorAnimalPlace = shallow(<ColorAnimalPlace />)

  it('should render', () => {
    expect(colorAnimalPlace.find('h1').text()).to.equal('Color Animal Place')
  })
})
