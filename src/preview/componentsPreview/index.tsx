import ComponentsPreviewUI from './componentsPreviewUI'

const ComponentsPreview = ({
  name,
  data = {},
}: Readonly<{ name: string; data: object }>) => {
  return <ComponentsPreviewUI name={name} data={data} />
}
export default ComponentsPreview
