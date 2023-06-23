import Sidebar from "@/components/Sidebar"
import Head from "next/head"
import Image from "next/image"
import { PropsWithChildren } from "react"



export default function Home({ children }: PropsWithChildren) {

    return (
        <>
            <Head>
                <title>Dashboard - Demo</title>
                <meta name="description" content="Simat UIM Preview" />
                <meta charSet="utf-8" />
                <meta name="author" content="Alvin Setya Pranata" />
                <meta name="keywords" content="simat, uim" />
            </Head>

            <main className='w-full max-h-screen flex'>

                <Sidebar />

                <div className="w-full max-h-screen overflow-y-auto">
                    <div className="min-w-full bg-base grid md:flex place-items-center text-white py-6 md:py-12 px-28 md:gap-12 md:items-center">
                        <div className="w-[150px] h-[150px] md:flex-shrink-0 rounded-full overflow-hidden relative">
                            <div className="min-w-full min-h-full bg-black opacity-0 hover:opacity-25 absolute transition-opacity duration-300">
                                <p>Ganti</p>
                            </div>
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
                    {children}
                </div>
            </main>
        </>
    )
}
