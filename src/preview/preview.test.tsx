import { describe, it, expect, vi, Mock } from 'vitest'
import { render } from '@testing-library/react'

import Preview from './index'
import PreviewUI from './previewUI'
import { useEditorContext } from '@/context'

vi.mock('@/context', () => ({
  useEditorContext: vi.fn(),
}))

vi.mock('./previewUI', () => ({
  __esModule: true,
  default: vi.fn(() => <div>Mocked PreviewUI</div>),
}))

describe('Preview component', () => {
  it('renders PreviewUI with sections from context', () => {
    vi.mocked(useEditorContext).mockReturnValueOnce({
      sections: [{ id: 1, name: 'Test Section' }],
    })

    render(<Preview />)

    expect(PreviewUI).toHaveBeenCalled()
  })

  it('renders PreviewUI with empty array if context has no sections', () => {
    ;(useEditorContext as unknown as Mock).mockReturnValueOnce({
      sections: [],
    })

    render(<Preview />)

    expect(PreviewUI).toHaveBeenCalled()
  })
})
