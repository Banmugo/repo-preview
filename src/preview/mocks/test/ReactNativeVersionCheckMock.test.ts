import { describe, it, expect } from 'vitest'
import appInfo from '../ReactNativeVersionCheckMock'

describe('appInfo', () => {
  it('getCurrentVersion returns "0.0.1"', () => {
    expect(appInfo.getCurrentVersion()).toBe('0.0.1')
  })

  it('getStoreUrl returns an empty string', () => {
    expect(appInfo.getStoreUrl()).toBe('')
  })

  it('getCountry returns "US"', () => {
    expect(appInfo.getCountry()).toBe('US')
  })

  it('getPackageName returns "com.example.app"', () => {
    expect(appInfo.getPackageName()).toBe('com.example.app')
  })

  it('needUpdate resolves to { isNeeded: false }', async () => {
    const result = await appInfo.needUpdate()
    expect(result).toEqual({ isNeeded: false })
  })
})
