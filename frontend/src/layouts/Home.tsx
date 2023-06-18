import Image from "next/image"
import { useState } from "react"


export default function Home() {

    // in producion is replaced by useReducer
    const [revealed, setRevealed] = useState(false)

    return (
        <div className="w-full max-h-screen overflow-y-auto">
            <div className="min-w-full bg-base grid md:flex place-items-center text-white py-6 md:py-12 px-28 md:gap-12 md:items-center">
                <div className="w-[150px] h-[150px] md:flex-shrink-0 rounded-full overflow-hidden">
                    <Image width={150} height={150} src="/image.jpg" alt="image" className="min-w-full min-h-full object-cover" />
                </div>
                <div className="grid place-items-center md:w-full md:flex md:justify-between md:items-center">
                    <div className="grid gap-[5px] text-center md:text-left">
                        <h3 className="text-lg md:text-2xl font-common font-bold mt-6">Halo, kak Alvin</h3>
                        <p className="text-lg md:text-xl font-common font-semibold text-gold">Selamat Datang di Dasbormu!</p>
                    </div>
                    <div className="flex gap-12 mt-6 md:grid md:gap-2 md:text-center">
                        <p className="font-semibold font-common text-base md:text-xl md:font-bold">Semester 2</p>
                        <p className="font-semibold font-common text-base">TI-A 2022</p>
                    </div>
                </div>
            </div>
            <div className="py-6 px-4 max-h-screen">
                <table className="min-w-full border-separate border-spacing-8">
                    <thead className="hidden md:table-header-group">
                        <tr className="flex py-4 px-6 justify-between min-w-ful rounded-3xl md:rounded-none md:table-row md:p-0">
                            <th >Mata Kuliah</th>
                            <th>Dosen Pengajar</th>
                            <th>Bobot</th>
                            <th>Status Kelulusan</th>
                        </tr>
                    </thead>
                    <tbody className="min-w-full flex flex-col gap-6 md:table-row-group">
                        <tr className="flex py-4 px-6 justify-between min-w-full bg-slate-300 md:bg-white rounded-3xl md:rounded-none md:table-row">
                            <td className="text-center">Pemograman Dasar</td>
                            <td className="hidden md:table-cell text-center">Moh Hamzah</td>
                            <td className="hidden md:table-cell text-center">20</td>
                            <td className="hidden md:table-cell text-center font-bold text-red-500">TIDAK LULUS</td>
                            <td>
                                <button className="md:hidden" onClick={() => setRevealed(!revealed)}>{revealed ? 'Hide' : 'Expand'}</button>
                            </td>
                        </tr>
                        <tr className={`${revealed ? 'table-row' : 'hidden'} md:hidden`}>
                            <td colSpan={2} className="flex px-4 py-2">
                                <div className="grid w-full gap-4">
                                    <div className="flex min-w-full justify-between">
                                        <p>Nama Pengajar:</p>
                                        <p>Moh Amin</p>
                                    </div>
                                    <div className="flex min-w-full justify-between">
                                        <p>Bobot</p>
                                        <p>20</p>
                                    </div>
                                    <div className="flex min-w-full justify-between">
                                        <p>Status Kelulusan</p>
                                        <p className="font-bold text-red-500">TIDAK LULUS</p>
                                    </div>
                                </div>
                            </td>
                        </tr>

                        {/* diff */}
                        
                        {/* <tr className="flex py-4 px-6 justify-between min-w-full bg-slate-300 md:bg-white rounded-3xl md:rounded-none md:table-row">
                            <td className="text-center">Pemograman Dasar</td>
                            <td className="hidden md:block text-center">Moh Hamzah</td>
                            <td className="hidden md:block text-center">20</td>
                            <td className="hidden md:block text-center font-bold text-red-500">TIDAK LULUS</td>
                            <td>
                                <button className="md:hidden" onClick={() => setRevealed(!revealed)}>{revealed ? 'Hide' : 'Expand'}</button>
                            </td>
                        </tr>
                        <tr className={`${revealed ? 'table-row' : 'hidden'} md:hidden`}>
                            <td colSpan={2} className="flex px-4 py-2">
                                <div className="grid w-full gap-4">
                                    <div className="flex min-w-full justify-between">
                                        <p>Nama Pengajar:</p>
                                        <p>Moh Amin</p>
                                    </div>
                                    <div className="flex min-w-full justify-between">
                                        <p>Bobot</p>
                                        <p>20</p>
                                    </div>
                                    <div className="flex min-w-full justify-between">
                                        <p>Status Kelulusan</p>
                                        <p className="font-bold text-red-500">TIDAK LULUS</p>
                                    </div>
                                </div>
                            </td>
                        </tr> */}

                        {/* diff */}
                        {/* <tr className="flex py-4 px-6 justify-between min-w-full bg-slate-300 md:bg-white rounded-3xl md:rounded-none md:table-row">
                            <td className="text-center">Pemograman Dasar</td>
                            <td className="hidden md:block text-center">Moh Hamzah</td>
                            <td className="hidden md:block text-center">20</td>
                            <td className="hidden md:block text-center font-bold text-red-500">TIDAK LULUS</td>
                            <td>
                                <button className="md:hidden" onClick={() => setRevealed(!revealed)}>{revealed ? 'Hide' : 'Expand'}</button>
                            </td>
                        </tr>
                        <tr className={`${revealed ? 'table-row' : 'hidden'} md:hidden`}>
                            <td colSpan={2} className="flex px-4 py-2">
                                <div className="grid w-full gap-4">
                                    <div className="flex min-w-full justify-between">
                                        <p>Nama Pengajar:</p>
                                        <p>Moh Amin</p>
                                    </div>
                                    <div className="flex min-w-full justify-between">
                                        <p>Bobot</p>
                                        <p>20</p>
                                    </div>
                                    <div className="flex min-w-full justify-between">
                                        <p>Status Kelulusan</p>
                                        <p className="font-bold text-red-500">TIDAK LULUS</p>
                                    </div>
                                </div>
                            </td>
                        </tr> */}

                    </tbody>
                </table>
            </div>
        </div>
    )
}
