import Home from "@/layouts/Home"

const About = () => {
    return (
        <div className="py-12 px-4 h-max box-border">
            <div className="px-12 text-center">
                <h1 className="text-xl font-bold md:text-3xl">Sistem Informasi Akademik Terpadu</h1>
                <p className="text-lg font-normal md:text-xl mt-6">Merupakan applikasi untuk membantu mahasiswa dalam memanagement dan mengkontrol aktivitas yang berkaitan dengan perkuliahannya, applikasi ini dibuat sesederhana mungkin agar dapat dioperasikan oleh mahasiswa, dosen dan staff dengan mudah</p>
                <span className="font-semibold block text-lg mt-8">Designed and Created by Alvin Setya Pranata <a href="https" className="text-blue-500 font-normal underline text-sm ml-2">Tentang Saya</a></span>
            </div>
        </div>
    )
}

export default About


About.getLayout = function getLayout(page) {
    return (
        <Home>
            {page}
        </Home>
    )
}