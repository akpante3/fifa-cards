import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Navbar from '../../components/navbar/index.vue'

describe('Navbar', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(Navbar)
    expect(wrapper.vm).toBeTruthy()
  })

  it('contains a nav element', () => {
    const wrapper = mount(Navbar)
    expect(wrapper.find('nav').exists()).toBe(true)
  })

  it('contains two list items', () => {
    const wrapper = mount(Navbar)
    const li = wrapper.findAll('li')
    expect(li.length).toBe(2)
  })
})