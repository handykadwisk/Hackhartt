"use client"

import { useSearchParams } from "next/navigation"

const ClientFlashComponent = () => {

    const searchParams = useSearchParams()
    const errorMessage = searchParams.get("error")

    return(
        <>
            {errorMessage && (
                <p className="animate0plus rounded bg-red-400 px-4 py-2 text-center text-white">
                    {errorMessage}
                </p>
            )}
        </>
    )
}

export default ClientFlashComponent