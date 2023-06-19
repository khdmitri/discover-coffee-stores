import Link from "next/link";
import {Metadata, ResolvingMetadata} from 'next'
import coffeeStoresData from "../../../data/coffee-stores.json"

export const dynamicParams = true

type Props = {
    params: { id: string }
}

export async function generateMetadata(
    {params}: Props,
    parent?: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const id = params.id
    const coffeeStore = coffeeStoresData.find(it => it.id === id)

    return {
        title: coffeeStore ? coffeeStore : "Not found coffee store"
    }
}

async function getCoffeeStore(params) {
    return coffeeStoresData.find(it => it.id === params.id)
}

export async function generateStaticParams() {
  return [{ id: '0' }, { id: '1' }]
}

const CoffeeStore = ({params}: { id: string }) => {
    console.log(`Params: ${params.id}`)

    return (
        <div>
            Coffee store page: {params.id}
            <Link href="/">Back to home</Link>
        </div>
    )
}

export default CoffeeStore;