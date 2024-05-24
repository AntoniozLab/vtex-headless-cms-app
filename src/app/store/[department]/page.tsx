
interface IProps {
  params: {
    department: string
  }
}

export default function Department(props: IProps) {
  const { department } = props.params;
  return (<div>department: {department}</div>)
}