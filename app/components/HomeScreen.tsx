'use client'

import React, { useState } from 'react'
import './HomeScreen.css'

const stationList = [
    'New Delhi',
    'Mumbai Central',
    'Howrah Junction',
    'Chennai Central',
    'Secunderabad',
    'Patna Junction',
    'Bangalore City',
    'Ahmedabad',
    'Bhubaneswar',
    'Pune Junction',
]

const HomeScreen = () => {
    const [fromInput, setFromInput] = useState('')
    const [toInput, setToInput] = useState('')
    const [date, setDate] = useState('')

    const filterStations = (input: string) => {
        return stationList.filter((station) =>
            station.toLowerCase().includes(input.toLowerCase())
        )
    }

    return (
        <main className="bg-white text-blue-900 min-h-screen overflow-x-hidden">

            <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4 text-center fade-in">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 slide-down">
                    Welcome to <span className="text-blue-700">RailwayBaba</span>
                </h1>
                <p className="text-lg mb-10 max-w-2xl mx-auto text-blue-800 fade-in delay-1">
                    Your all-in-one platform for train travel – search, status, schedule & more.
                </p>

                <div className="max-w-full mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8 fade-in delay-2">
                    <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                        
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="From Station"
                                value={fromInput}
                                onChange={(e) => setFromInput(e.target.value)}
                                className="w-full px-6 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {fromInput && (
                                <ul className="absolute top-full left-0 w-full bg-white shadow border rounded-lg z-10 max-h-40 overflow-auto">
                                    {filterStations(fromInput).map((station, i) => (
                                        <li
                                            key={i}
                                            className="px-4 h-12 py-2 hover:bg-blue-100 cursor-pointer"
                                            onClick={() => setFromInput(station)}
                                        >
                                            {station}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="To Station"
                                value={toInput}
                                onChange={(e) => setToInput(e.target.value)}
                                className="w-full h-12 px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {toInput && (
                                <ul className="absolute top-full left-0 w-full bg-white shadow border rounded-lg z-10 max-h-40 overflow-auto">
                                    {filterStations(toInput).map((station, i) => (
                                        <li
                                            key={i}
                                            className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                                            onClick={() => setToInput(station)}
                                        >
                                            {station}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full h-12 px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <button
                            type="submit"
                            className="w-full md:w-2/3 bg-blue-700 text-white h-12 px-6 py-3 rounded-lg hover:bg-blue-800 transition"
                        >
                            Search Trains
                        </button>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default HomeScreen
