import React from 'react'
import { expect } from 'chai'
import { mount, shallow, render } from 'enzyme'
import AddNumbers from '../../src/js/components/addNumbers'

describe('<AddNumbers />', () => {
  let addNumbers = mount(<AddNumbers />)

  it('should render', () => {
    expect(addNumbers.find('h1').text()).to.equal('Add Numbers')
  })
})
