import React from 'react'
import { expect } from 'chai'
import { mount, shallow, render } from 'enzyme'
import LastNumbers from '../../src/js/components/numbersInARow'

describe('<LastNumbers />', () => {
  let numbersInARow = shallow(<LastNumbers/>)

  it('should render', () => {
    expect(numbersInARow.find('h1').text()).to.equal('Numbers in a Row')
  })
})
