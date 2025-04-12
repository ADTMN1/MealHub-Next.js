"use client"

export default function error({ error }) {
    return (
        <main className="error">
            <h1>An error Occurred! </h1>
            <p>Failed to fetch meal data.</p>
        </main>
    )
}
