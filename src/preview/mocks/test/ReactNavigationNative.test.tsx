import { describe, it, expect, vi } from 'vitest'
import {
  useNavigation,
  useRoute,
  useLinkTo,
  useIsFocused,
} from '../ReactNavigationNative'

describe('navigation hooks mock', () => {
  describe('useNavigation', () => {
    it('returns an object with navigation methods that log a warning', () => {
      const nav = useNavigation()
      const consoleWarnSpy = vi
        .spyOn(console, 'warn')
        .mockImplementation(() => {})

      expect(typeof nav.navigate).toBe('function')
      expect(typeof nav.goBack).toBe('function')
      expect(typeof nav.push).toBe('function')
      expect(typeof nav.pop).toBe('function')
      expect(typeof nav.replace).toBe('function')
      expect(typeof nav.reset).toBe('function')
      expect(typeof nav.setParams).toBe('function')

      nav.navigate()
      expect(consoleWarnSpy).toHaveBeenCalledWith('Mock navigation.navigate()')

      nav.goBack()
      expect(consoleWarnSpy).toHaveBeenCalledWith('Mock navigation.goBack()')

      consoleWarnSpy.mockRestore()
    })
  })

  describe('useRoute', () => {
    it('returns a route object with name "MockScreen" and empty params', () => {
      const route = useRoute()
      expect(route.name).toBe('MockScreen')
      expect(route.params).toEqual({})
    })
  })

  describe('useLinkTo', () => {
    it('returns a function that logs a warning with the path', () => {
      const linkTo = useLinkTo()
      const consoleWarnSpy = vi
        .spyOn(console, 'warn')
        .mockImplementation(() => {})

      linkTo('/somePath')
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        'Mock useLinkTo() navigated to /somePath'
      )

      consoleWarnSpy.mockRestore()
    })
  })

  describe('useIsFocused', () => {
    it('returns true', () => {
      const isFocused = useIsFocused()
      expect(isFocused).toBe(true)
    })
  })
})
