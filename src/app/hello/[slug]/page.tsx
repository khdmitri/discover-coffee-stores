'use client'

import {useSearchParams} from "next/navigation";

export default function DynamicComponent() {
    const router = useSearchParams()
    console.log("router", router.get("slug"))

    return (
        <section>

        </section>
    )
}
