// GlobalStyles.test.ts
import { describe, it, expect } from 'vitest'
import { GlobalStyles } from './styles'

describe('GlobalStyles', () => {
  it('should be defined and be an object', () => {
    expect(GlobalStyles).toBeDefined()
    expect(typeof GlobalStyles).toBe('object')
  })

  it('should have backgroundColor property with expected structure', () => {
    expect(GlobalStyles).toHaveProperty('backgroundColor')
    expect(GlobalStyles.backgroundColor).toMatchObject({
      base: '#ffffff',
      base09: 'rgba(255, 255, 255, 0.9)',
      baseInverted: '#1D2734',
    })
  })

  it('should have typography property with expected structure', () => {
    expect(GlobalStyles).toHaveProperty('typography')
    expect(GlobalStyles.typography).toMatchObject({
      heading1: {
        fontWeight: '500',
        fontSize: 28,
        letterSpacing: 0,
        lineHeight: 40,
      },
      heading2: {
        fontWeight: '500',
        fontSize: 18,
        letterSpacing: 0,
      },
    })
  })

  it('should have spacing property as an array of numbers', () => {
    expect(GlobalStyles).toHaveProperty('spacing')
    expect(Array.isArray(GlobalStyles.spacing)).toBe(true)
    GlobalStyles.spacing.forEach((value: number) => {
      expect(typeof value).toBe('number')
    })
  })

  it('should have colors property with expected structure', () => {
    expect(GlobalStyles).toHaveProperty('colors')
    expect(GlobalStyles.colors).toMatchObject({
      primaryColor: '#FFFFFF',
      secondaryColor: '#480095',
      tertiaryColor: '#FFFFFF',
      quaternaryColor: 'rgba(255, 148, 63, 1)',
      baseTextColor: '#000000',
    })
  })

  it('should have button property with expected structure', () => {
    expect(GlobalStyles).toHaveProperty('button')
    expect(GlobalStyles.button).toHaveProperty('buttonPrimary')
  })

  it('should have notification property with success, warning, and error', () => {
    expect(GlobalStyles).toHaveProperty('notification')
    expect(GlobalStyles.notification).toMatchObject({
      success: {
        backgroundColor: '#AD1AC7',
        color: '#FFFFFF',
      },
      warning: {
        backgroundColor: '#E2D6EE',
        color: '#480095',
      },
      error: {
        backgroundColor: '#E31616',
        color: '#FFFFFF',
      },
    })
  })

  it('should have pushNotification property with container, content, title, body', () => {
    expect(GlobalStyles).toHaveProperty('pushNotification')
    expect(GlobalStyles.pushNotification).toMatchObject({
      container: {},
      content: {},
      title: {},
      body: {},
    })
  })
})
