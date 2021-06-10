import Calc from '../src/components/Calc'
import { mount } from '@vue/test-utils'

describe('Calculator logic test', () => {
  test('Test sum operation', () => {
    const Wrapper = mount(Calc)

    const operand1 = Wrapper.find('input[name=operand1]')
    const operand2 = Wrapper.find('input[name=operand2]') 
    const sumBtn = Wrapper.find('button[name="+"]') 

    operand1.setValue('4')
    operand2.setValue('6')

    sumBtn.trigger('click')

    expect(Wrapper.vm.result).toBe(10)
  })

  test('Test sub operation', () => {
    const Wrapper = mount(Calc)

    const operand1 = Wrapper.find('input[name=operand1]')
    const operand2 = Wrapper.find('input[name=operand2]') 
    const subBtn = Wrapper.find('button[name="-"]') 

    operand1.setValue('40')
    operand2.setValue('6')

    subBtn.trigger('click')

    expect(Wrapper.vm.result).toBe(34)
  })

  test('Test mult operation', () => {
    const Wrapper = mount(Calc)

    const operand1 = Wrapper.find('input[name=operand1]')
    const operand2 = Wrapper.find('input[name=operand2]') 
    const multBtn = Wrapper.find('button[name="*"]') 

    operand1.setValue('4')
    operand2.setValue('6')

    multBtn.trigger('click')

    expect(Wrapper.vm.result).toBe(24)
  })

  test('Test div operation', () => {
    const Wrapper = mount(Calc)

    const operand1 = Wrapper.find('input[name=operand1]')
    const operand2 = Wrapper.find('input[name=operand2]') 
    const divBtn = Wrapper.find('button[name="/"]') 

    operand1.setValue('12')
    operand2.setValue('6')

    divBtn.trigger('click')

    expect(Wrapper.vm.result).toBe(2)
  })

  test('Test exp operation', () => {
    const Wrapper = mount(Calc)

    const operand1 = Wrapper.find('input[name=operand1]')
    const operand2 = Wrapper.find('input[name=operand2]') 
    const expBtn = Wrapper.find('button[name="**"]') 

    operand1.setValue('2')
    operand2.setValue('3')

    expBtn.trigger('click')

    expect(Wrapper.vm.result).toBe(8)
  })

  test('Test screen keyboard (button 0)', () => {
    const Wrapper = mount(Calc)

    const btn = Wrapper.find('button[name="0"]')
    btn.trigger('click')

    expect(Wrapper.vm.operand1).toBe(0)
  })
  test('Test screen keyboard (button 1)', () => {
    const Wrapper = mount(Calc)

    const btn = Wrapper.find('button[name="1"]')
    btn.trigger('click')

    expect(Wrapper.vm.operand1).toBe(1)
  })
  test('Test screen keyboard (button 2)', () => {
    const Wrapper = mount(Calc)

    const btn = Wrapper.find('button[name="2"]')
    btn.trigger('click')

    expect(Wrapper.vm.operand1).toBe(2)
  })
  test('Test screen keyboard (button 3)', () => {
    const Wrapper = mount(Calc)

    const btn = Wrapper.find('button[name="3"]')
    btn.trigger('click')

    expect(Wrapper.vm.operand1).toBe(3)
  })
  test('Test screen keyboard (button 4)', () => {
    const Wrapper = mount(Calc)

    const btn = Wrapper.find('button[name="4"]')
    btn.trigger('click')

    expect(Wrapper.vm.operand1).toBe(4)
  })
  test('Test screen keyboard (button 5)', () => {
    const Wrapper = mount(Calc)

    const btn = Wrapper.find('button[name="5"]')
    btn.trigger('click')

    expect(Wrapper.vm.operand1).toBe(5)
  })
  test('Test screen keyboard (button 6)', () => {
    const Wrapper = mount(Calc)

    const btn = Wrapper.find('button[name="6"]')
    btn.trigger('click')

    expect(Wrapper.vm.operand1).toBe(6)
  })
  test('Test screen keyboard (button 7)', () => {
    const Wrapper = mount(Calc)

    const btn = Wrapper.find('button[name="7"]')
    btn.trigger('click')

    expect(Wrapper.vm.operand1).toBe(7)
  })
  test('Test screen keyboard (button 8)', () => {
    const Wrapper = mount(Calc)

    const btn = Wrapper.find('button[name="8"]')
    btn.trigger('click')

    expect(Wrapper.vm.operand1).toBe(8)
  })
  test('Test screen keyboard (button 9)', () => {
    const Wrapper = mount(Calc)

    const btn = Wrapper.find('button[name="9"]')
    btn.trigger('click')

    expect(Wrapper.vm.operand1).toBe(9)
  })
  test('Test screen keyboard (button delete(operand = 4))', () => {
    const Wrapper = mount(Calc)

    const operand1 = Wrapper.find('input[name=operand1]')
    operand1.setValue('4')

    const btn = Wrapper.find('button[name="delete"]')
    btn.trigger('click')

    expect(Wrapper.vm.operand1).toBe(0)
  })
  test('Test screen keyboard (button delete(operand = 41))', () => {
    const Wrapper = mount(Calc)

    const operand1 = Wrapper.find('input[name=operand1]')
    operand1.setValue('41')

    const btn = Wrapper.find('button[name="delete"]')
    btn.trigger('click')

    expect(Wrapper.vm.operand1).toBe(4)
  })

  test('Test screen keyboard (button 1 and button 6)', () => {
    const Wrapper = mount(Calc)

    const btn1 = Wrapper.find('button[name="1"]')
    const btn6 = Wrapper.find('button[name="6"]')
    btn1.trigger('click')
    btn6.trigger('click')

    expect(Wrapper.vm.operand1).toBe(16)
  })

  test('Test radio-1 input', () => {
    const Wrapper = mount(Calc)

    const radio1 = Wrapper.find('input[name="radioOp1"]')
    radio1.trigger('click')

    expect(Wrapper.vm.picked).toBe("1")
  })
  test('Test radio-2 input', () => {
    const Wrapper = mount(Calc)

    const radio2 = Wrapper.find('input[name="radioOp2"]')
    radio2.trigger('click')

    expect(Wrapper.vm.picked).toBe("2")
  })

  test('Test checked', () => {
    const Wrapper = mount(Calc)

    const check = Wrapper.find('input[name="check"]')
    check.trigger('click')

    expect(Wrapper.vm.checked).toEqual(false)
  })
})



