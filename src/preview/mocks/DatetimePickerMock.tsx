import React from 'react'

interface DateTimePickerProps {
  value: Date
  mode?: 'date' | 'time' | 'datetime'
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    selectedDate?: Date
  ) => void
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  value,
  mode = 'date',
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = event.target.value
      ? new Date(event.target.value)
      : undefined
    onChange(event, newDate)
  }

  let inputType = ''

  switch (mode) {
    case 'time':
      inputType = 'time'
      break
    case 'datetime':
      inputType = 'datetime-local'
      break
    default:
      inputType = 'date'
      break
  }

  return (
    <input
      data-testId="inputMock"
      type={inputType}
      value={value.toISOString().split('T')[0]}
      onChange={handleChange}
    />
  )
}

export default DateTimePicker
