import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import PlayerStats from '../../components/playerStats/index.vue'

describe('PlayerStats', () => {
  const header = 'Points'
  const headerValue = 25
  const stats = { rebounds: 10, assists: 5 }

  it('is a Vue instance', () => {
    const wrapper = mount(PlayerStats, {
      props: { header, headerValue, stats }
    })
    expect(wrapper.vm).toBeTruthy()
  })

  it('contains a ul element', () => {
    const wrapper = mount(PlayerStats, {
      props: { header, headerValue, stats }
    })
    expect(wrapper.find('ul').exists()).toBe(true)
  })

  it('contains a li element with class player-stats__header', () => {
    const wrapper = mount(PlayerStats, {
      props: { header, headerValue, stats }
    })
    expect(wrapper.find('li.player-stats__header').exists()).toBe(true)
  })

})
