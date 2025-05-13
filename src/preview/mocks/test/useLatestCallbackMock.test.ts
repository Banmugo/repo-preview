import { describe, it, expect } from 'vitest'
import useLastestCallback from '../useLatestCallbackMock'

describe('emptyExport', () => {
  it('should be an empty object', () => {
    expect(useLastestCallback).toEqual({})
  })
})
