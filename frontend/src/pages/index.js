import Sidebar from '@/components/Sidebar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='w-max h-max'>
      <Sidebar />
      <h2>Hello Worlds</h2>
    </main>
  )
}
