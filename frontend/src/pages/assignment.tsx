import Home from "@/layouts/Home"
import { useState } from "react"

const Assignment = () => {
    
    const [revealed, setRevealed] = useState(false)

    
    return (
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
                </tbody>
            </table>
        </div>
    )
}

export default Assignment

Assignment.getLayout = function getLayout(page) {
    return (
        <Home>
            {page}
        </Home>
    )
}