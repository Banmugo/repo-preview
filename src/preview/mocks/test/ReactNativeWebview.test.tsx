import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { WebView } from '../ReactNativeWebview'

describe('WebView', () => {
  it('renders an iframe with the correct src when source.uri is provided', () => {
    const onLoadMock = vi.fn()
    const onErrorMock = vi.fn()

    render(
      <WebView
        source={{ uri: 'https://example.com' }}
        onLoad={onLoadMock}
        onError={onErrorMock}
        style={{ width: '200px', height: '100px' }}
      />
    )

    const iframe = screen.getByTestId('WebViewMock')

    expect(iframe).not.toBeUndefined()
    expect(iframe.style.width).toBe('200px')
    expect(iframe.style.height).toBe('100px')

    expect(onLoadMock).toHaveBeenCalled()
    expect(onErrorMock).not.toHaveBeenCalled()
  })
})
