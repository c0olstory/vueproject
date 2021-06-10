import TestComponent from './TestComponent'
import { mount } from '@vue/test-utils'

describe('TestComponent', () => {
  test('Content f the TestComponent', () => {
    const Wrapper = mount(TestComponent, {
      propsData: {
        message: 'hello'
      }
    })
    expect(Wrapper.text()).toEqual('the message is hello')
  })
})