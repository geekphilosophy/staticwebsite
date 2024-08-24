import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Dev() {
    const [count, setCount] = useState(0)
    const [lambdaResult, setLambdaResult] = useState(null)

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1)
    }

    const callLambda = async () => {
        try {
            // Replace this URL with your actual AWS Lambda function URL
            const response = await fetch('https://your-lambda-function-url.amazonaws.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ count }),
            })
            const data = await response.json()
            setLambdaResult(data.message)
        } catch (error) {
            console.error('Error calling Lambda:', error)
            setLambdaResult('Error calling Lambda function')
        }
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-3xl">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-2">Dev</h1>
                <p className="text-xl text-gray-600">With JavaScript Interactivity</p>
            </header>
            <main className="bg-white rounded-lg shadow-md p-6">
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">Counter</h2>
                    <p className="text-gray-700 mb-4">Current count: {count}</p>
                    <button
                        onClick={incrementCount}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Increment
                    </button>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">Lambda Function</h2>
                    <button
                        onClick={callLambda}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
                    >
                        Call Lambda
                    </button>
                    {lambdaResult && (
                        <p className="text-gray-700">Lambda result: {lambdaResult}</p>
                    )}
                </section>
            </main>
            <nav className="mt-6">
                <Link to="/" className="text-blue-600 hover:text-blue-800">
                    Back to Home
                </Link>
            </nav>
        </div>
    )
}

export default Dev