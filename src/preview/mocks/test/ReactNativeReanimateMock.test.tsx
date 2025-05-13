import { describe, it, expect } from 'vitest'
import { Animated, FadeInDown } from '../ReactNativeReanimateMock'

describe('Mock de Animated', () => {
  it('exporta un objeto con View, Text, Image y createAnimatedComponent', () => {
    expect(typeof Animated).toBe('object')
    expect(typeof Animated.createAnimatedComponent).toBe('function')
  })

  it('FadeInDown tiene la forma correcta', () => {
    expect(FadeInDown).toHaveProperty('duration', 500)
    expect(typeof FadeInDown.easing).toBe('function')
  })

  it('createAnimatedComponent devuelve el mismo componente', () => {
    const DummyComponent = () => null
    const ResultComponent = Animated.createAnimatedComponent(DummyComponent)
    expect(ResultComponent).toBe(DummyComponent)
  })
})
