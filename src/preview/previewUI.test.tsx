// previewUI.test.tsx
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import PreviewUI from './previewUI'
import ComponentsPreview from './componentsPreview'
import { Section } from '@/interfaces/editor'

vi.mock('./componentsPreview', () => ({
  __esModule: true,
  default: vi.fn(() => <div data-testid="components-preview">Mocked</div>),
}))

describe('PreviewUI', () => {
  it('renders empty state message if sections is empty and not loading', () => {
    render(<PreviewUI sections={[]} sectionsLoading={false} />)

    expect(screen.getByTestId('empty-state-message')).toBeDefined()
    expect(screen.queryByTestId('loading-spinner')).toBeNull()
    expect(screen.queryByTestId('components-preview')).toBeNull()
  })

  it('renders empty state message if sections is undefined and not loading', () => {
    render(<PreviewUI sections={undefined} sectionsLoading={false} />)

    expect(screen.getByTestId('empty-state-message')).toBeDefined()
    expect(screen.queryByTestId('components-preview')).toBeNull()
    expect(screen.queryByTestId('loading-spinner')).toBeNull()
  })

  it('renders loading spinner when sectionsLoading is true', () => {
    render(<PreviewUI sections={[]} sectionsLoading={true} />)

    expect(screen.getByTestId('loading-spinner')).toBeDefined()
    expect(screen.queryByTestId('components-preview')).toBeNull()
    expect(screen.queryByText('No sections added yet')).toBeNull()
  })

  it('renders ComponentsPreview for each section if non-empty', () => {
    const sections: Section[] = [
      { id: '1', name: 'TestName1', data: { foo: 'bar' } },
      { id: '2', name: 'TestName2', data: { foo: 'baz' } },
    ] as Section[]

    render(<PreviewUI sections={sections} />)

    expect(screen.queryByTestId('loading-spinner')).toBeNull()

    const previews = screen.getAllByTestId('components-preview')
    expect(previews).toHaveLength(2)

    expect(ComponentsPreview).toHaveBeenCalled()
  })
})
