import React from 'react'
import { expect } from 'chai'
import { mount, shallow, render } from 'enzyme'
import ColorVWord from '../../src/js/components/colorVWord'

describe('<ColorVWord />', () => {
  let colorVWord = shallow(<ColorVWord/>)

  it('should render', () => {
    expect(colorVWord.find('h1').text()).to.equal('Color vs. Word')
  })
})
