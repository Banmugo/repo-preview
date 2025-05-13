import { describe, it, expect, vi } from 'vitest'
import { Platform, StyleSheet } from 'react-native'
import useStyles, { Styles } from './useStyles'

describe('useStyles', () => {
  it('returns an empty StyleSheet if no className is provided', () => {
    const result = useStyles({})
    expect(result).toEqual(StyleSheet.create({}))
  })

  it('logs a warning if className is not found in styles', () => {
    const consoleWarnSpy = vi
      .spyOn(console, 'warn')
      .mockImplementation(() => {})
    const result = useStyles({}, 'nonExistingClass')

    // Expect a warning message
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'Class "nonExistingClass" is not defined in styles'
    )
    // Should still return an empty style object
    expect(result).toEqual(StyleSheet.create({}))

    consoleWarnSpy.mockRestore()
  })

  it('merges ".android" styles when Platform.OS is android', () => {
    vi.spyOn(Platform, 'OS', 'get').mockReturnValue('android')

    const inputStyles: Styles = {
      myClass: {
        container: { backgroundColor: 'red' },
        'container.android': { backgroundColor: 'blue' },
        text: { color: 'white' },
        'text.ios': { color: 'black' },
      },
    }

    const result = useStyles(inputStyles, 'myClass') as {
      container: unknown
      text: unknown
      'text.ios': unknown
      'container.android': unknown
    }

    const containerStyle = StyleSheet.flatten(result.container) as {
      backgroundColor: string
    }
    const textStyle = StyleSheet.flatten(result.text) as {
      color: string
    }

    expect(containerStyle.backgroundColor).toBe('blue')
    expect(textStyle.color).toBe('white')

    expect(result['container.android']).toBeUndefined()
    expect(result['text.ios']).toBeUndefined()
  })

  it('merges ".ios" styles when Platform.OS is ios', () => {
    vi.spyOn(Platform, 'OS', 'get').mockReturnValue('ios')

    const inputStyles: Styles = {
      myClass: {
        container: { backgroundColor: 'red' },
        'container.android': { backgroundColor: 'blue' },
        text: { color: 'white' },
        'text.ios': { color: 'black' },
      },
    }

    const result = useStyles(inputStyles, 'myClass') as {
      container: unknown
      text: unknown
      'text.ios': unknown
      'container.android': unknown
    }

    const containerStyle = StyleSheet.flatten(result.container) as {
      backgroundColor: string
    }
    const textStyle = StyleSheet.flatten(result.text) as { color: string }

    expect(containerStyle.backgroundColor).toBe('red')
    expect(textStyle.color).toBe('black')

    expect(result['container.android']).toBeUndefined()
    expect(result['text.ios']).toBeUndefined()
  })
})
