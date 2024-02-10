interface Props {
  text: string
}

export default function Heading({ text }: Props) {
  return <h1 className="text-5xl italic mb-10" >{text}</h1>
}
