import React from 'react'
import { View, ViewProps } from 'react-native'

// Mock de createNavigatorFactory
export const createNavigatorFactory = () => {
  // Retorna un "factory" que simula un Navigator y Screen
  return () => ({
    // @ts-expect-error forzamos ignorar la props interna si la pasamos
    Navigator: (props: ViewProps) => <View {...props} />,
    // @ts-expect-error forzamos ignorar la props interna si la pasamos
    Screen: (props: ViewProps) => <View {...props} />,
  })
}

// Mock de StackActions
export const StackActions = {
  push: () => {},
  pop: () => {},
  replace: () => {},
  reset: () => {},
}

export const useLinkBuilder = () => {
  return (routeName: string, params?: object) => {
    console.warn(
      `Mock useLinkBuilder called with routeName=${routeName} params=${JSON.stringify(params)}`
    )
  }
}

// Mock de StackRouter y useNavigationBuilder
export const StackRouter = () => {}
export const useNavigationBuilder = () => {}

// Hooks personalizados (tus funciones)
export const useNavigation = () => ({
  navigate: () => console.warn('Mock navigation.navigate()'),
  goBack: () => console.warn('Mock navigation.goBack()'),
  push: () => console.warn('Mock navigation.push()'),
  pop: () => console.warn('Mock navigation.pop()'),
  replace: () => console.warn('Mock navigation.replace()'),
  reset: () => console.warn('Mock navigation.reset()'),
  setParams: () => console.warn('Mock navigation.setParams()'),
})

export const useRoute = () => ({
  name: 'MockScreen',
  params: {},
})

export const useLinkTo = () => (path: string) => {
  console.warn(`Mock useLinkTo() navigated to ${path}`)
}

export const useIsFocused = () => true

export const useTheme = () => ({
  colors: {
    background: '#ffffff',
    text: '#000000',
    primary: '#6200ee',
    card: '#ffffff',
    border: '#e0e0e0',
    notification: '#f50057',
  },
})
