import { describe, it, expect } from 'vitest'
import FirebaseAnalytics from '../FirebaseAnalyticsMock'
import FirebaseApp from '../FirebaseAppMock'
import FirebaseMessagin from '../FirebaseMessagingMock'

describe('emptyExport', () => {
  it('should be an empty object', () => {
    expect(FirebaseAnalytics).toEqual({})
    expect(FirebaseApp).toEqual({})
    expect(FirebaseMessagin).toEqual({})
  })
})
