"use client";

import { useState } from 'react';
import Navbar from "@/app/components/Navbar";

export default function Calculator() {
    const data = [
        {type:"Telewizor", value:100},
        {type:"Żarówka LED", value:10},
        {type:"Laptop", value:50},
        {type:"Klimatyzacja", value:1500}
    ];

    const [selectedDevice, setSelectedDevice] = useState("");
    const [devicesList, setDevicesList] = useState([]);

    const handleAddDevice = () => {
        if (!selectedDevice) return;

        const selected = data.find(item => item.type === selectedDevice);
        if (selected) {
            setDevicesList([...devicesList, selected]);
            setSelectedDevice("");
        }
    };

    const removeDevice = (index) => {
        const newList = [...devicesList];
        newList.splice(index, 1);
        setDevicesList(newList);
    };

    const calculateTotalCost = () => {
        const kWhPrice = 1.23;
        const hoursPerDay = 24;
        const totalWattage = devicesList.reduce((sum, device) => sum + device.value, 0);
        const totalKWh = (totalWattage * hoursPerDay) / 1000;
        return (totalKWh * kWhPrice).toFixed(2);
    };

    return (
        <div className="h-screen bg-cover bg-center flex flex-col" style={{ backgroundImage: "url('/background.png')" }}>
            <header>
                <Navbar />
            </header>
            <div className="flex flex-row gap-8 max-w-7xl mx-auto p-4">
                <div className="flex-1 grid grid-cols-[2fr_1fr]  grid-rows-[auto_1fr] gap-4 items-start">
                    <div className="col-span-2 flex gap-4 rounded-2xl">
                        <select
                            value={selectedDevice}
                            onChange={(e) => setSelectedDevice(e.target.value)}
                            className="flex-1 bg-white px-6 py-4 rounded-2xl"
                        >
                            <option value="">Wybierz urządzenie</option>
                            {data.map((item) => (
                                <option key={item.type} value={item.type}>
                                    {item.type} ({item.value}W)
                                </option>
                            ))}
                        </select>
                        <button
                            onClick={handleAddDevice}
                            disabled={!selectedDevice}
                            className="w-32 bg-[var(--asparagus)] text-white px-4 py-4 rounded-2xl hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Dodaj
                        </button>
                    </div>

                    {/* Tabela - col-span-2 */}
                    <div className="col-span-2 bg-white rounded-lg shadow overflow-hidden min-h-[200px]">
                        {devicesList.length > 0 ? (
                            <table className="w-full">
                                <thead>
                                <tr className="bg-gray-100">
                                    <th className="text-left p-3">Urządzenie</th>
                                    <th className="text-right p-3">Moc (W)</th>
                                    <th className="text-right p-3">Akcje</th>
                                </tr>
                                </thead>
                                <tbody>
                                {devicesList.map((device, index) => (
                                    <tr key={index} className="border-b hover:bg-gray-50">
                                        <td className="p-3">{device.type}</td>
                                        <td className="text-right p-3">{device.value}W</td>
                                        <td className="text-right p-3">
                                            <button
                                                onClick={() => removeDevice(index)}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                Usuń
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        ) : (
                            <p className="p-4 text-gray-500 flex justify-center mt-0">Brak dodanych urządzeń</p>
                        )}
                    </div>
                </div>

                {/* Panel podsumowania - po prawej stronie */}
                <div className="w-80 bg-white p-6 rounded-lg shadow h-fit sticky top-4">
                    <h3 className="font-bold text-xl mb-4 text-[var(--asparagus)]">Podsumowanie</h3>

                    <div className="space-y-4">
                        <div>
                            <p className="text-gray-600">Liczba urządzeń:</p>
                            <p className="text-2xl font-bold">{devicesList.length}</p>
                        </div>

                        <div>
                            <p className="text-gray-600">Całkowita moc:</p>
                            <p className="text-2xl font-bold">
                                {devicesList.reduce((sum, device) => sum + device.value, 0)}W
                            </p>
                        </div>

                        <div className="pt-4 border-t">
                            <p className="text-gray-600">Koszt dzienny (24h):</p>
                            <p className="text-3xl font-bold text-[var(--asparagus)]">
                                {calculateTotalCost()} zł
                            </p>
                        </div>

                        <div className="pt-4 border-t">
                            <p className="text-gray-600">Koszt miesięczny:</p>
                            <p className="text-xl font-semibold">
                                {(calculateTotalCost() * 30).toFixed(2)} zł
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}