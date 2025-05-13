import { describe, it, expect } from 'vitest'
import { getAssetByID } from '../AssetRegistryMock'

describe('getAssetByID', () => {
  it('returns an object with the provided id and a mocked-uri', () => {
    const id = 'test-id'
    const result = getAssetByID(id)

    expect(result).toEqual({ id, uri: 'mocked-uri' })
  })
})
