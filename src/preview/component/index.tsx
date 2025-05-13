import { ComponentUI } from "./componentUI"

export const Component = ({
  name,
  data = {},
}: Readonly<{ name: string; data: object }>) => {
  return(<ComponentUI  name={name} data={data}/>)
}
