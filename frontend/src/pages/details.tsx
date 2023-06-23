import Home from "@/layouts/Home"
import { useState } from "react"



// export const config = { amp : true }


function Details() {
    const [selected, setSelected] = useState<number>(1)
    const [disabled, setDisabled] = useState<boolean>(true)

    // works only on mobile
    const [expanded, setExpanded] = useState<boolean>(true)


    const baseButtonClass = "py-4 px-4 text-left w-full md:w-max text-white rounded-md font-semibold"
    const buttonActiveClass = `${baseButtonClass} md:bg-white md:text-black`

    const handleClick = (id: number) => {
        setSelected(id)

    }

    const formLayout = {
        'personal': ['Nama', 'NIK', 'NISN', 'NPWP', 'Kewarganegaraan'],
        'account': ['Username', 'Password']
    }

    const handleUpdate = () => {

        setDisabled(true)
    }


    return (
        <div className="py-8 px-4 max-h-screen">
            <div className={`w-full py-2 px-4 pb-4 md:p-6 bg-base rounded-md flex flex-col md:flex-row overflow-y-hidden items-center gap-y-4 gap-x-16 ${expanded ? 'h-max' : 'h-[70px]'} md:h-max`}>
                <button className={`${baseButtonClass} text-right md:hidden`} onClick={() => setExpanded(!expanded)}>Expand</button>

                <button className={selected == 1 ? buttonActiveClass : baseButtonClass} onClick={() => handleClick(1)}>Data Pribadi</button>
                <button className={selected == 2 ? buttonActiveClass : baseButtonClass} onClick={() => handleClick(2)}>Data Sekolah</button>
                <button className={selected == 3 ? buttonActiveClass : baseButtonClass} onClick={() => handleClick(3)}>Data OrangTua</button>
                <button className={selected == 4 ? buttonActiveClass : baseButtonClass} onClick={() => handleClick(4)}>Data Akademik</button>
                <button className={selected == 5 ? buttonActiveClass : baseButtonClass} onClick={() => handleClick(5)}>Data PMB</button>
                <button className={selected == 6 ? buttonActiveClass : baseButtonClass} onClick={() => handleClick(6)}>Data Akun</button>
            </div>

            <div className="w-full px-6 py-12">
                <div className="flex justify-end w-full gap-4">
                    <button className={`py-2 rounded-md px-6 bg-blue-500 font-semibold text-white flex-grow-0 max-w-max ${disabled ? 'block' : 'hidden'}`} onClick={() => { setDisabled(false); console.log(disabled) }}>Edit</button>

                    <button className={`py-2 rounded-md px-6 bg-red-500 font-semibold text-white flex-grow-0 max-w-max ${disabled ? 'hidden' : 'block'}`} onClick={() => setDisabled(true)}>Batalkan</button>
                    <button className={`py-2 rounded-md px-6 bg-green-500 font-semibold text-white flex-grow-0 max-w-max ${disabled ? 'hidden' : 'block'}`} onClick={handleUpdate}>Simpan</button>
                </div>

                {selected == 1 &&
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 gap-x-8 grid-rows-6 mt-12 w-full">
                            {formLayout.personal.map((value, idx) => {
                                return (
                                    <div className="grid gap-4" key={idx}>
                                        <label className="font-semibold">{value}</label>
                                        <input type="text" className={`w-[350px] text-base grid-flow-col py-2 rounded-md ${disabled ? '' : 'border-2 px-2'} border-slate-500`} disabled={disabled} />
                                    </div>
                                )
                            })}
                        </div>
                }
                {selected == 6 &&
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 gap-x-8 grid-rows-6 mt-12 w-full">
                            {formLayout.account.map((value, idx) => {
                                return (
                                    <div className="grid gap-4" key={idx}>
                                        <label className="font-semibold">{value}</label>
                                        <input type="text" className={`w-[350px] text-base grid-flow-col py-2 rounded-md ${disabled ? '' : 'border-2 px-2'} border-slate-500`} disabled={disabled} />
                                    </div>
                                )
                            })}
                        </div>
                }
            </div>
        </div>
    )
}

export default Details

Details.getLayout = function getLayout(page) {
    return (
        <Home>
            {page}
        </Home>
    )
}