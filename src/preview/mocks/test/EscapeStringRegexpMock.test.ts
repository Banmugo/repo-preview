import { describe, it, expect } from 'vitest'
import { escapeStringRegexp } from '../EscapeStringRegexpMock'

describe('escapeStringRegexp', () => {
  it('escapes special regex characters', () => {
    const input = 'hello.*+?^${}()|[]\\world'
    const expected = 'hello\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\\\world'
    expect(escapeStringRegexp(input)).toBe(expected)
  })

  it('returns the same string if there are no special characters', () => {
    const input = 'HelloWorld123'
    expect(escapeStringRegexp(input)).toBe(input)
  })

  it('returns an empty string if input is empty', () => {
    expect(escapeStringRegexp('')).toBe('')
  })
})
