'use client'
import PreviewUI from './previewUI'

export interface SectionSchema {
  title: string
  type: 'object'
  description?: string
  properties: {
    [key: string]: SchemaProperty
  }
}

export interface SchemaProperty {
  type: string
  title: string
  description?: string
  items?: {
    type: string
    title: string
    properties?: Record<string, SchemaProperty>
  }
}

export type Section = {
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any> | Record<string, never>
  id: string
  schema?: SectionSchema
}
const Preview = (sections: Section[], sectionsLoading: boolean) => {
  return <PreviewUI sections={sections} sectionsLoading={sectionsLoading} />
}

export default Preview
