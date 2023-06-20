import Home from "@/layouts/Home"
import { useState } from "react"


const Payments = () => {

    const [revealed, setRevealed] = useState(0)

    const handleReveal = (idx) => {
        if (revealed == idx) {
            setRevealed(-1)
        }

        else {
            setRevealed(idx)
        }
        
        console.log(revealed)

    }

    const data = [
        {
            "need": "SPP",
            "cost": "Rp.3000.000",
            "paid": "Rp.3000.000",
            "date": "24-02-2025",
            "status": "LUNAS",
        },
        {
            "need": "SPP",
            "cost": "Rp.3000.000",
            "paid": "Rp.3000.000",
            "date": "24-02-2025",
            "status": "LUNAS",
        },
    ]


    return (
        <div className="py-6 px-4 max-h-screen">
            <table className="min-w-full border-separate border-spacing-8">
                <thead className="hidden md:table-header-group">
                    <tr className="flex py-4 px-6 justify-between min-w-ful rounded-3xl md:rounded-none md:table-row md:p-0">
                        <th>No</th>
                        <th>Keperluan</th>
                        <th>Biaya</th>
                        <th>Dibayar</th>
                        <th>Tanggal Bayar</th>
                        <th>Status Pembayaran</th>
                    </tr>
                </thead>
                <tbody className="min-w-full flex flex-col gap-6 md:table-row-group">

                    {data.map((item, idx) => {
                        return (
                            <>
                                <tr className="flex py-4 px-6 justify-between min-w-full bg-slate-300 md:bg-white rounded-3xl md:rounded-none md:table-row" key={idx}>
                                    <td className="hidden md:table-cell text-center">{idx + 1}</td>
                                    <td className="text-center">{item["need"]}</td>
                                    <td className="hidden md:table-cell text-center">{item["cost"]}</td>
                                    <td className="hidden md:table-cell text-center">{item["paid"]}</td>
                                    <td className="hidden md:table-cell text-center">{item["date"]}</td>
                                    <td className={`hidden md:table-cell text-center font-bold ${item["status"] == "LUNAS" ? "text-green-500" : "text-red-500"}`}>{item["status"]}</td>
                                    <td>
                                        <button className="md:hidden" onClick={() => handleReveal(idx)}>{revealed == idx ? 'Hide' : 'Expand'}</button>
                                    </td>
                                </tr>

                                <tr className={`${revealed == idx ? 'table-row' : 'hidden'} md:hidden`}>
                                    <td colSpan={2} className="flex px-4 py-2">
                                        <div className="grid w-full gap-4">
                                            <div className="flex min-w-full justify-between">
                                                <p>Keperluan:</p>
                                                <p>{item["need"]}</p>
                                            </div>
                                            <div className="flex min-w-full justify-between">
                                                <p>Nominal</p>
                                                <p>{item["cost"]}</p>
                                            </div>
                                            <div className="flex min-w-full justify-between">
                                                <p>Dibayar</p>
                                                <p>{item["paid"]}</p>
                                            </div>
                                            <div className="flex min-w-full justify-between">
                                                <p>Tanggal Bayar</p>
                                                <p>{item["date"]}</p>
                                            </div>
                                            <div className="flex min-w-full justify-between">
                                                <p>Status Pembayaran</p>
                                                <p className={`font-bold ${item["status"] == "LUNAS" ? "text-green-500" : "text-red-500"}`}>{item["status"]}</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </>
                        )
                    })}

                    {/* p */}
                    {/* <tr className="flex py-4 px-6 justify-between min-w-full bg-slate-300 md:bg-white rounded-3xl md:rounded-none md:table-row">
                        <td className="hidden md:table-cell text-center">1</td>
                        <td className="text-center">SPP</td>
                        <td className="hidden md:table-cell text-center">Rp.2000.000</td>
                        <td className="hidden md:table-cell text-center">-</td>
                        <td className="hidden md:table-cell text-center font-bold text-red-500">BELUM LUNAS</td>
                        <td>
                            <button className="md:hidden" onClick={() => setRevealed(!revealed)}>{revealed ? 'Hide' : 'Expand'}</button>
                        </td>
                    </tr>
                    <tr className={`${revealed ? 'table-row' : 'hidden'} md:hidden`}>
                        <td colSpan={2} className="flex px-4 py-2">
                            <div className="grid w-full gap-4">
                                <div className="flex min-w-full justify-between">
                                    <p>Keperluan:</p>
                                    <p>SPP</p>
                                </div>
                                <div className="flex min-w-full justify-between">
                                    <p>Nominal</p>
                                    <p>Rp.3000.000</p>
                                </div>
                                <div className="flex min-w-full justify-between">
                                    <p>Tanggal Bayar</p>
                                    <p>-</p>
                                </div>
                                <div className="flex min-w-full justify-between">
                                    <p>Status Pembayaran</p>
                                    <p className="font-bold text-red-500">BELUM LUNAS</p>
                                </div>
                            </div>
                        </td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default Payments


Payments.getLayout = function getLayout(page) {
    return (
        <Home>
            {page}
        </Home>
    )
}

