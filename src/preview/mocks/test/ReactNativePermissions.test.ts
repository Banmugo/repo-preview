import { describe, it, expect, vi } from 'vitest'
import {
  RESULTS,
  PERMISSIONS,
  request,
  check,
  openSettings,
  checkNotifications,
  requestNotifications,
} from '../ReactNativePermissions'

describe('permissions module', () => {
  it('RESULTS has the expected keys and values', () => {
    expect(RESULTS).toEqual({
      UNAVAILABLE: 'unavailable',
      DENIED: 'denied',
      LIMITED: 'limited',
      GRANTED: 'granted',
      BLOCKED: 'blocked',
    })
  })

  it('PERMISSIONS has the expected structure', () => {
    expect(PERMISSIONS).toEqual({
      ANDROID: {
        CAMERA: 'android.permission.CAMERA',
        LOCATION: 'android.permission.ACCESS_FINE_LOCATION',
      },
      IOS: {
        CAMERA: 'ios.permission.CAMERA',
        LOCATION: 'ios.permission.LOCATION_WHEN_IN_USE',
      },
      WEB: {
        CAMERA: 'web.permission.CAMERA',
        LOCATION: 'web.permission.LOCATION',
      },
    })
  })

  describe('request', () => {
    it('logs a warning and returns RESULTS.GRANTED', async () => {
      const consoleWarnSpy = vi
        .spyOn(console, 'warn')
        .mockImplementation(() => {})
      const permission = PERMISSIONS.WEB.CAMERA

      const result = await request(permission)

      expect(consoleWarnSpy).toHaveBeenCalledWith(
        `Requesting permission: ${permission}`
      )
      expect(result).toBe(RESULTS.GRANTED)

      consoleWarnSpy.mockRestore()
    })
  })

  describe('check', () => {
    it('logs a warning and returns RESULTS.GRANTED', async () => {
      const consoleWarnSpy = vi
        .spyOn(console, 'warn')
        .mockImplementation(() => {})
      const permission = PERMISSIONS.WEB.LOCATION

      const result = await check(permission)

      expect(consoleWarnSpy).toHaveBeenCalledWith(
        `Checking permission: ${permission}`
      )
      expect(result).toBe(RESULTS.GRANTED)

      consoleWarnSpy.mockRestore()
    })
  })

  describe('openSettings', () => {
    it('logs a warning and returns undefined', async () => {
      const consoleWarnSpy = vi
        .spyOn(console, 'warn')
        .mockImplementation(() => {})

      const result = await openSettings()

      expect(consoleWarnSpy).toHaveBeenCalledWith('Opening settings...')
      expect(result).toBeUndefined()

      consoleWarnSpy.mockRestore()
    })
  })

  describe('checkNotifications', () => {
    it('logs a warning and returns { status: RESULTS.GRANTED, settings: {} }', async () => {
      const consoleWarnSpy = vi
        .spyOn(console, 'warn')
        .mockImplementation(() => {})

      const result = await checkNotifications()

      expect(consoleWarnSpy).toHaveBeenCalledWith('Checking notifications...')
      expect(result).toEqual({ status: RESULTS.GRANTED, settings: {} })

      consoleWarnSpy.mockRestore()
    })
  })

  describe('requestNotifications', () => {
    it('logs a warning and returns { status: RESULTS.GRANTED, settings: {} }', async () => {
      const consoleWarnSpy = vi
        .spyOn(console, 'warn')
        .mockImplementation(() => {})

      const result = await requestNotifications()

      expect(consoleWarnSpy).toHaveBeenCalledWith('Requesting notifications...')
      expect(result).toEqual({ status: RESULTS.GRANTED, settings: {} })

      consoleWarnSpy.mockRestore()
    })
  })
})
