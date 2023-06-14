import Image from "next/image"


export default function Home() {
    return (
        <div className="w-full">
            <div className="min-w-full bg-base grid place-items-center text-white py-6">
                <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
                    <Image width={150} height={150} src="/image.jpg" alt="image" className="min-w-full min-h-full object-cover" />
                </div>
                <div className="grid gap-[5px] text-center">
                    <h3 className="text-lg font-common font-bold mt-6">Halo, kak Alvin</h3>
                    <p className="text-lg font-common font-semibold text-gold">Selamat Datang di Dasbormu!</p>
                </div>
                <div className="flex gap-12 mt-6">
                    <p className="font-semibold font-common text-base">TI-A 2022</p>
                    <p className="font-semibold font-common text-base">Semester 2</p>
                </div>
            </div>
            <div className="py-6 px-4 max-h-full">
                <table className="min-w-full bg-red-500 border-separate border-spacing-[40px]">
                    <thead className="hidden md:block">
                        <tr>
                            <th>Mata Kuliah</th>
                            <th>Dosen Pengajar</th>
                            <th>Bobot</th>
                            <th>Status Kelulusan</th>
                        </tr>
                    </thead>
                    <tbody className="min-w-full flex flex-col gap-6">
                        <tr className="flex py-4 px-6 justify-between min-w-full bg-slate-300 rounded-3xl md:rounded-none">
                            <td>Pemograman Dasar</td>
                            <td>
                                <button className="md:hidden">Expand</button>
                            </td>
                        </tr>
                        <tr className="flex py-4 px-6 justify-between min-w-full bg-slate-300 rounded-3xl md:rounded-none">
                            <td>Pemograman Dasar</td>
                            <td>
                                <button className="md:hidden">Expand</button>
                            </td>
                        </tr>
                        <tr className="flex py-4 px-6 justify-between min-w-full bg-slate-300 rounded-3xl md:rounded-none">
                            <td>Pemograman Dasar</td>
                            <td>
                                <button className="md:hidden">Expand</button>
                            </td>
                        </tr>
                        <tr className="flex py-4 px-6 justify-between min-w-full bg-slate-300 rounded-3xl md:rounded-none">
                            <td>Pemograman Dasar</td>
                            <td>
                                <button className="md:hidden">Expand</button>
                            </td>
                        </tr>
                        <tr className="flex py-4 px-6 justify-between min-w-full bg-slate-300 rounded-3xl md:rounded-none">
                            <td>Pemograman Dasar</td>
                            <td>
                                <button className="md:hidden">Expand</button>
                            </td>
                        </tr>
                        <tr className="flex py-4 px-6 justify-between min-w-full bg-slate-300 rounded-3xl md:rounded-none">
                            <td>Pemograman Dasar</td>
                            <td>
                                <button className="md:hidden">Expand</button>
                            </td>
                        </tr>
                        <tr className="flex py-4 px-6 justify-between min-w-full bg-slate-300 rounded-3xl md:rounded-none">
                            <td>Pemograman Dasar</td>
                            <td>
                                <button className="md:hidden">Expand</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
