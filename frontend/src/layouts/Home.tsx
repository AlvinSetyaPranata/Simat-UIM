import Image from "next/image"



/*
    BUGS:
- using padding in inline css because can't use py property using tailwind

*/


export default function Home() {
    return (
        <div className="w-full h-full">
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
            <p>Hello worlds</p>
        </div>
    )
}
