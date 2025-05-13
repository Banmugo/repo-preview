import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Component } from './index'

vi.mock('./componentUI', () => {
  return {
    ComponentUI: ({ name, data }: { name: string; data?: object }) => (
      <div data-testid="mocked-component-ui">
        <label>{name}</label>
        <label>{JSON.stringify(data)}</label>
      </div>
    ),
  }
})


describe('Component', () => {
  it('renderiza el mock de ComponentUI con las props correctas', () => {
    render(<Component name="TestName" data={{ foo: 'bar' }} />)

    const mockedUI = screen.getByTestId('mocked-component-ui')

    expect(mockedUI).not.toBeUndefined()

    screen.debug()

    expect(screen.queryByText("TestName")).not.toBeNull()
    expect(screen.queryByText('{"foo":"bar"}')).not.toBeNull()
  })
})
