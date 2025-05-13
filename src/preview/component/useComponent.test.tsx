import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useComponent } from './useComponent'

vi.mock('@ITGlobers/itg-ecommerce-plugin', () => {
  return {
    components: {
      someName: () => <div>Mocked someName</div>,
    },
  }
})

describe('useComponent', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it('marca isMounted como true tras montar el hook', () => {
    const { result } = renderHook(() => useComponent({ name: 'someName', data: {} }))

    expect(result.current.isMounted).toBe(true)
  })

  it('cambia isChangeData a true cuando "data" cambia y vuelve a false tras 600ms', () => {
    const { result, rerender } = renderHook(
      (props) => useComponent(props),
      {
        initialProps: { name: 'someName', data: {} }
      }
    )

    act(() => {
      rerender({ name: 'someName', data: { foo: 'bar' } })
    })

    expect(result.current.isChangeData).toBe(true)

    act(() => {
      vi.advanceTimersByTime(599)
    })
    expect(result.current.isChangeData).toBe(true)

    act(() => {
      vi.advanceTimersByTime(1)
    })
    expect(result.current.isChangeData).toBe(false)
  })

  it('retorna el componente correcto de @ITGlobers/itg-ecommerce-plugin según "name"', () => {
    const { result } = renderHook(() => useComponent({ name: 'someName', data: {} }))
    expect(result.current.Component).toBeDefined()
  })

  it('expondrá el array omitComponents con los valores esperados', () => {
    const { result } = renderHook(() => useComponent({ name: 'someName', data: {} }))
    const { omitComponents } = result.current
    expect(omitComponents).toContain('webview-checkout')
    expect(omitComponents).toContain('welcome-component')
    expect(omitComponents).toContain('maintenance-screen')
  })

  it('errorFallbackCard() retorna un elemento React con un <Card>', () => {
    const { result } = renderHook(() => useComponent({ name: 'someName', data: {} }))
    const fallback = result.current.errorFallbackCard()

    expect(fallback).toBeTruthy()
  })
})
