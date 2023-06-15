import Link from "next/link";
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { id: string }
}

export async function generateMetadata(
  { params }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id

  return {
    title: id
  }
}

const CoffeeStore = ({params}: {id: string}) => {
    console.log(`Params: ${params.id}`)

    return (
        <div>
            Coffee store page: {params.id}
            <Link href="/">Back to home</Link>
        </div>
    )
}

export default CoffeeStore;