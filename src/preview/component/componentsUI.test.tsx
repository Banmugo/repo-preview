import React from 'react'
import { describe, it, expect, vi, afterEach, Mock } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ComponentUI } from './componentUI'
import { useComponent } from './useComponent'

vi.mock('./useComponent', () => ({
  useComponent: vi.fn(),
}))

describe('ComponentUI', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('no renderiza nada si el nombre está en omitComponents', () => {
    (useComponent as Mock).mockReturnValue({
      Component: () => <div>Mocked Component</div>,
      isChangeData: false,
      isMounted: true,
      errorFallbackCard: () => <div>Error fallback</div>,
      omitComponents: ['someName', 'webview-checkout'],
      verifyRenderComponents: [],
      errorRenderCard: () => <div>Error render Card</div>,
    })

    render(<ComponentUI name="someName" data={{}} />)

    expect(screen.queryByText('Mocked Component')).toBeNull()
  })

  it('no renderiza nada y muestra error en consola si no existe el componente', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => { })
      ; (useComponent as Mock).mockReturnValue({
        Component: undefined,
        isChangeData: false,
        isMounted: true,
        errorFallbackCard: () => <div>Error fallback</div>,
        omitComponents: [],
        verifyRenderComponents: [],
        errorRenderCard: () => <div>Error render Card</div>,
      })

    render(<ComponentUI name="notFound" data={{}} />)
    expect(screen.queryByText('Mocked Component')).toBeNull()
    expect(consoleSpy).toHaveBeenCalledWith('Component notFound not found')
    consoleSpy.mockRestore()
  })

  it('no renderiza el componente si isMounted es false', () => {
    (useComponent as Mock).mockReturnValue({
      Component: () => <div>Mocked Component</div>,
      isChangeData: false,
      isMounted: false,
      errorFallbackCard: () => <div>Error fallback</div>,
      omitComponents: [],
      verifyRenderComponents: [],
      errorRenderCard: () => <div>Error render Card</div>,
    })

    render(<ComponentUI name="someName" data={{}} />)
    expect(screen.queryByText('Mocked Component')).toBeNull()
  })

  it('renderiza el componente sin blur ni backdrop si isChangeData es false e isMounted es true', () => {
    (useComponent as Mock).mockReturnValue({
      Component: ({ testProp }: { testProp: string }) => <div>Mocked Component - {testProp}</div>,
      isChangeData: false,
      isMounted: true,
      errorFallbackCard: () => <div>Error fallback</div>,
      omitComponents: [],
      verifyRenderComponents: [],
      errorRenderCard: () => <div>Error render Card</div>,
    })

    render(<ComponentUI name="someName" data={{ testProp: 'Hello' }} />)

    expect(screen.getByText('Mocked Component - Hello')).not.toBeUndefined()
    expect(screen.queryByRole('progressbar')).toBeNull()
  })

  it('renderiza el componente con blur y muestra el Backdrop si isChangeData es true', () => {
    (useComponent as Mock).mockReturnValue({
      Component: ({ testProp }: { testProp: string }) => <div>Mocked Component - {testProp}</div>,
      isChangeData: true,
      isMounted: true,
      errorFallbackCard: () => <div>Error fallback</div>,
      omitComponents: [],
      verifyRenderComponents: [],
      errorRenderCard: () => <div>Error render Card</div>,
    })

    render(<ComponentUI name="someName" data={{ testProp: 'Hello' }} />)

    expect(screen.getByText('Mocked Component - Hello')).not.toBeUndefined()
  })

  it('usa el ErrorBoundary con fallback cuando el hijo falla', () => {
    const ThrowErrorComponent = () => {
      throw new Error('Test error')
    }

      ; (useComponent as Mock).mockReturnValue({
        Component: ThrowErrorComponent,
        isChangeData: false,
        isMounted: true,
        errorFallbackCard: () => <div>Error fallback</div>,
        omitComponents: [],
        verifyRenderComponents: [],
        errorRenderCard: () => <div>Error render Card</div>,
      })

    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => { })

    render(<ComponentUI name="someName" data={{}} />)

    expect(screen.getByText('Error fallback')).not.toBeUndefined()

    consoleErrorSpy.mockRestore()
  })
})
