import React from 'react'
import { expect } from 'chai'
import { mount, shallow, render } from 'enzyme'
import LoadingSpinner from '../../src/js/components/loadingSpinner'

describe('<LoadingSpinner />', () => {
  let loadingSpinner = shallow(<LoadingSpinner />)

  it('should render', () => {
    expect(loadingSpinner.find('img').length).to.equal(1)
  })
})
