'use client'

import React, { useState } from 'react'
import './HomeScreen.css'

const stationList = [
    { code: 'NDLS', name: 'New Delhi' },
    { code: 'BCT', name: 'Mumbai Central' },
    { code: 'HWH', name: 'Howrah Junction' },
    { code: 'MAS', name: 'Chennai Central' },
    { code: 'SC', name: 'Secunderabad' },
    { code: 'PNBE', name: 'Patna Junction' },
    { code: 'SBC', name: 'Bangalore City' },
    { code: 'ADI', name: 'Ahmedabad' },
    { code: 'BBS', name: 'Bhubaneswar' },
    { code: 'PUNE', name: 'Pune Junction' },
]

const HomeScreen = () => {
    const [fromInput, setFromInput] = useState('')
    const [toInput, setToInput] = useState('')
    const [date, setDate] = useState('')

    const filterStations = (input: string) =>
        stationList.filter(
            (station) =>
                station.name.toLowerCase().includes(input.toLowerCase()) ||
                station.code.toLowerCase().includes(input.toLowerCase())
        )

    return (
        <main className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen text-blue-900 px-4 pt-20">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
                    Welcome to <span className="text-blue-700">RailwayBaba</span>
                </h1>
                <p className="text-lg text-blue-800 max-w-xl mx-auto">
                    Search your trains faster with smart autofill and instant options.
                </p>
            </div>

            <div className="max-w-full mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10">
                <form
                    className="flex flex-col md:flex-row md:flex-wrap gap-6"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="relative w-full md:w-[30%]">
                        <input
                            type="text"
                            placeholder="From Station (e.g. NDLS)"
                            value={fromInput}
                            onChange={(e) => setFromInput(e.target.value)}
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                        />
                        {fromInput && (
                            <ul className="absolute z-10 top-full left-0 w-full bg-white border border-blue-200 shadow-md rounded-lg max-h-52 overflow-y-auto mt-1">
                                {filterStations(fromInput).map((station, i) => (
                                    <li
                                        key={i}
                                        className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-sm"
                                        onClick={() => setFromInput(`${station.code} - ${station.name}`)}
                                    >
                                        {station.code} - {station.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="relative w-full md:w-[30%]">
                        <input
                            type="text"
                            placeholder="To Station (e.g. BBS)"
                            value={toInput}
                            onChange={(e) => setToInput(e.target.value)}
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                        />
                        {toInput && (
                            <ul className="absolute z-10 top-full left-0 w-full bg-white border border-blue-200 shadow-md rounded-lg max-h-52 overflow-y-auto mt-1">
                                {filterStations(toInput).map((station, i) => (
                                    <li
                                        key={i}
                                        className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-sm"
                                        onClick={() => setToInput(`${station.code} - ${station.name}`)}
                                    >
                                        {station.code} - {station.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="w-full md:w-[20%]">
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                        />
                    </div>

                    <div className="w-full md:w-[11%] flex items-center justify-center">
                        <button
                            type="submit"
                            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-lg text-sm transition"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default HomeScreen
