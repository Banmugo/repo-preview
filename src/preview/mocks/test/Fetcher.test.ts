import { describe, it, expect } from 'vitest'
import { fetcher } from '../Fetcher'

describe('fetcher', () => {
  it('returns an object containing url, options, and parseJson', () => {
    const url = 'https://example.com'
    const options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
    const parseJson = true

    const result = fetcher(url, options, parseJson)

    expect(result).toEqual({
      url,
      options,
      parseJson,
    })
  })

  it('handles empty options and parseJson set to false', () => {
    const url = 'https://another-example.com'
    const options = {}
    const parseJson = false

    const result = fetcher(url, options, parseJson)

    expect(result).toEqual({
      url,
      options,
      parseJson,
    })
  })
})
