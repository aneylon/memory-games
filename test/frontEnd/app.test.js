import React from 'react'
import { expect } from 'chai'
import { mount, shallow, render } from 'enzyme'
import App from '../../src/js/components/app'

describe('<App />', () => {
  let app = shallow(<App />)

  it('should render', () => {
    expect(app.find('#content').length).to.equal(1)
  })
})
