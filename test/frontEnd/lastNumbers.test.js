import React from 'react'
import { expect } from 'chai'
import { mount, shallow, render } from 'enzyme'
import LastNumbers from '../../src/js/components/lastNumbers'

describe('<LastNumbers />', () => {
  let lastNumbers = shallow(<LastNumbers/>)

  it('should render', () => {
    expect(lastNumbers.find('h1').text()).to.equal('Last Numbers')
  })
})
