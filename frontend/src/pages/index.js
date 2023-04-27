import Sidebar from '@/components/Sidebar'
import Home from '@/layouts/Home'

export default function Index() {
  return (
    <main className='w-max h-max flex'>
      <Sidebar />
      <Home />
    </main>
  )
}
