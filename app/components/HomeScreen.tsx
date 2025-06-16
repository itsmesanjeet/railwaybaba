'use client'

import React, { useEffect, useState } from 'react'
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
    const [recentSearches, setRecentSearches] = useState<any[]>([])

    // Helper: Filter Station Suggestions
    const filterStations = (input: string) =>
        stationList.filter(
            (station) =>
                station.name.toLowerCase().includes(input.toLowerCase()) ||
                station.code.toLowerCase().includes(input.toLowerCase())
        )

    // Load from localStorage on page load
    useEffect(() => {
        const stored = localStorage.getItem('recentSearches')
        if (stored) setRecentSearches(JSON.parse(stored))
    }, [])

    // Save recent searches
    const handleSearch = () => {
        if (!fromInput || !toInput || !date) return

        const newEntry = { from: fromInput, to: toInput, date }
        const updated = [newEntry, ...recentSearches.filter(s =>
            !(s.from === fromInput && s.to === toInput && s.date === date)
        )].slice(0, 5) // Keep only 5 latest

        localStorage.setItem('recentSearches', JSON.stringify(updated))
        setRecentSearches(updated)

        // You can add your actual search logic here
        console.log('Searching trains:', newEntry)
    }

    // Handle Fill From Recent or Top
    const fillFromSearch = (entry: any) => {
        setFromInput(entry.from)
        setToInput(entry.to)
        setDate(entry.date)
    }

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
                    onSubmit={(e) => {
                        e.preventDefault()
                        handleSearch()
                    }}
                >
                    {/* FROM */}
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

                    {/* TO */}
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

                    {/* DATE */}
                    <div className="w-full md:w-[20%]">
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                        />
                    </div>

                    {/* BUTTON */}
                    <div className="w-full md:w-[11%] flex items-center justify-center">
                        <button
                            type="submit"
                            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-lg text-sm transition cursor-pointer"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>

            {/* RECENT / TOP SEARCHES */}
            <div className="mt-10 max-w-full mx-auto">
                <h2 className="text-xl font-semibold mb-3 px-2">{
                    recentSearches.length > 0 ? 'Recent Searches' : 'Popular Routes'
                }</h2>

                <div className="flex flex-wrap gap-4 px-2">
                    {(recentSearches.length > 0 ? recentSearches : [
                        { from: 'NDLS - New Delhi', to: 'BBS - Bhubaneswar', date: '2025-06-20' },
                        { from: 'PUNE - Pune Junction', to: 'SBC - Bangalore City', date: '2025-06-21' },
                        { from: 'HWH - Howrah Junction', to: 'MAS - Chennai Central', date: '2025-06-22' },
                    ]).map((entry, index) => (
                        <button
                            key={index}
                            onClick={() => fillFromSearch(entry)}
                            className="px-4 py-2 bg-white hover:bg-blue-100 border border-blue-300 rounded-lg text-sm text-blue-800 transition"
                        >
                            {entry.from} → {entry.to} <span className="text-gray-500">({entry.date})</span>
                        </button>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default HomeScreen
