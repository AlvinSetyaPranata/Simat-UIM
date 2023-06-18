import Head from "next/head";
import Link from "next/link";


export default function Login() {


    return (
        <>
            <Head>
                <title>Masuk - Preview</title>
            </Head>
            <style jsx global>{`
                body {
                    background: linear-gradient(115.81deg, #40A763 3.47%, rgba(153, 255, 222, 0.95) 57.43%, #007952 105.85%);
                    padding: 20px 0;
                    box-sizing: border-box;
                    display: grid;
                    grid-place-items: center;
                }
            `}</style>
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 px-6 md:px-2 rounded-md flex h-max min-w-max bg-white">

                <div className="bg-red-500 w-full">
                    hello
                </div>

                <div className="flex flex-col items-center h-full py-10 min-h-full">
                    <h3 className="text-3xl xl:text-4xl font-bold mb-[50px] px-12">Selamat Datang</h3>
                    <img src="logo.png" alt="logo-uim" className="max-w-[150px]" />

                    {/* form fields */}

                    <form className="grid gap-y-8 min-w-full mt-[60px]">
                        <div className="w-full grid gap-y-2">
                            <label htmlFor="username" className="font-semibold">Nama Pengguna</label>
                            <input type="text" name="username" className="bg-slate-200 rounded-md py-2 px-4 outline-none" required />
                            <Link href="" className="text-sm text-blue-500 text-end font-semibold hover:underline">Belum daftar?</Link>
                        </div>

                        <div className="w-full grid gap-y-2">
                            <label htmlFor="password" className="font-semibold">Kata Sandi</label>
                            <input type="password" name="password" className="bg-slate-200 rounded-md py-2 px-4 outline-none" required />
                            <Link href="" className="text-sm text-blue-500 text-end font-semibold hover:underline">Lupa Password?</Link>
                        </div>

                        <button type="submit" className="w-full py-2 bg-base rounded-md font-semibold text-white mt-[20px]">Masuk</button>
                    </form>
                </div>

            </div>
        </>
    )
}