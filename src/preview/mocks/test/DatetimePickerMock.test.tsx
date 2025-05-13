import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import React from 'react'
import DateTimePicker from '../DatetimePickerMock'

describe('DateTimePicker', () => {
  it('renders with default "date" type', async () => {
    const mockDate = new Date('2023-05-01')
    render(<DateTimePicker value={mockDate} onChange={() => {}} />)

    await waitFor(() => {
      const input = screen.getByDisplayValue('2023-05-01')
      expect((input as HTMLInputElement).type).toBe('date')
      expect((input as HTMLInputElement).value).toBe('2023-05-01')
    })
  })

  it('renders with "time" type when mode="time"', async () => {
    const mockDate = new Date('2023-05-01T15:30:00')
    render(<DateTimePicker value={mockDate} mode="time" onChange={() => {}} />)

    const input = screen.getByTestId('inputMock')
    expect((input as HTMLInputElement).type).toBe('time')
  })

  it('renders with "datetime-local" type when mode="datetime"', () => {
    const mockDate = new Date('2023-05-01T15:30:00')
    render(
      <DateTimePicker value={mockDate} mode="datetime" onChange={() => {}} />
    )

    const input = screen.getByTestId('inputMock')
    expect((input as HTMLInputElement).type).toBe('datetime-local')
  })

  it('calls onChange with the correct date when the input changes', async () => {
    const mockDate = new Date('2023-05-01')
    const onChangeMock = vi.fn()
    render(<DateTimePicker value={mockDate} onChange={onChangeMock} />)

    const input = screen.getByTestId('inputMock')

    act(() => {
      fireEvent.change(input, { target: { value: '2023-05-10' } })
    })

    await waitFor(() => {
      expect(onChangeMock).toHaveBeenCalledTimes(1)
      const [[, newDate]] = onChangeMock.mock.calls
      expect(newDate?.toISOString().split('T')[0]).toBe('2023-05-10')
    })
  })
})
