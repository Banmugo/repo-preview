// ComponentsPreview.test.tsx
import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, waitFor } from '@testing-library/react'
import ComponentsPreview from './index'
import ComponentsPreviewUI from './componentsPreviewUI'

vi.mock('./componentsPreviewUI', () => ({
  default: vi.fn(() => <div>Mocked UI</div>),
}))

describe('ComponentsPreview', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('renders without crashing', () => {
    render(<ComponentsPreview name="TestName" data={{ foo: 'bar' }} />)
    expect(ComponentsPreviewUI).toHaveBeenCalled()
  })

  it('passes the correct props to ComponentsPreviewUI', async () => {
    const name = 'TestName'
    const data = { foo: 'bar' }
    render(<ComponentsPreview name={name} data={data} />)

    await waitFor(() => {
      expect(ComponentsPreviewUI).toHaveBeenCalled()
    })
  })
})
