import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
// Si usas matchers de jest-dom, importa esto:


import ComponentsPreviewUI from './componentsPreviewUI'

vi.mock('@ITGlobers/itg-ecommerce-plugin', () => {
  return {
    // Mockea cada componente que utilices de la librería
    ConfigProvider: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="mocked-config-provider">{children}</div>
    ),
    CustomStylesProvider: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="mocked-custom-styles-provider">{children}</div>
    ),
    GlobalStylesProvider: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="mocked-global-styles-provider">{children}</div>
    ),
    NotificationsProvider: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="mocked-notifications-provider">{children}</div>
    ),
    OrderFormProvider: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="mocked-orderform-provider">{children}</div>
    ),
    PushNotificationContainer: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="mocked-pushnotification-container">{children}</div>
    ),
  }
})

vi.mock("../component", () => {
  return {
    Component: ({ name }: { name: string; }) => <div>{name}</div>
  }
})

describe('ComponentsPreviewUI', () => {
  it('renderiza correctamente con props por defecto', () => {
    render(<ComponentsPreviewUI name="TestName" data={{ foo: 'bar' }} />)


    const textElement = screen.getByText(/TestName/i)
    expect(textElement).not.toBeUndefined()
  })

  it('renderiza sin errores si data está vacío', () => {
    render(<ComponentsPreviewUI name="EmptyData" data={{}} />)

    const textElement = screen.getByText(/EmptyData/i)
    expect(textElement).not.toBeUndefined()
  })
})
