import React from 'react'
import { expect } from 'chai'
import { mount, shallow, render } from 'enzyme'
import Foo from '../../src/js/components/foo'

// describe('<Foo />', () => {
//   it('calls componentDidMount', () => {
//     const Wrapper = mount(<Foo />)
//     expect(Foo.prototype.componentDidMount.calledOnce).to.equal(true)
//   })
// })

// describe("A suite", function() {
//   it("contains spec with an expectation", function() {
//     expect(shallow(<Foo />).contains(<div className="foo" >Foo!</div>)).to.equal(true)
//   })
//
//   it("contains spec with an expectation", function() {
//     expect(shallow(<Foo />).is('.foo')).to.equal(true)
//   })
//
//   it("contains spec with an expectation", function() {
//     expect(mount(<Foo />).find('.foo').length).to.equal(1)
//   })
// })
