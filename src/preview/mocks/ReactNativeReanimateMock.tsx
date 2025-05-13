import React, { ForwardedRef } from 'react'
import {
  View,
  Text,
  Image,
  ImageProps,
  TextProps,
  ViewProps,
} from 'react-native'

// Simula la función `createAnimatedComponent`
const createAnimatedComponent = <T extends React.ComponentType<unknown>>(
  Component: T
): T => {
  return Component
}

// Simula los componentes animados en Web
const Animated = {
  View: React.forwardRef<View, ViewProps>(function AnimatedView(
    props,
    ref: ForwardedRef<View>
  ) {
    // @ts-expect-error forzamos ignorar la ref interna si la pasamos
    return <View ref={ref} {...props} />
  }),
  Text: React.forwardRef<Text, TextProps>(function AnimatedText(
    props,
    ref: ForwardedRef<Text>
  ) {
    // @ts-expect-error forzamos ignorar la ref interna si la pasamos
    return <Text ref={ref} {...props} />
  }),
  Image: React.forwardRef<Image, ImageProps>(function AnimatedImage(
    { alt = '', ...props },
    ref: ForwardedRef<Image>
  ) {
    // @ts-expect-error forzamos ignorar la ref interna si la pasamos
    return <Image ref={ref} accessibilityLabel={alt} {...props} />
  }),
  createAnimatedComponent,
}

// Simula la animación FadeInDown (sin animación real)
const FadeInDown = {
  duration: 500,
  easing: () => {},
}

export { Animated, FadeInDown }
export default Animated
