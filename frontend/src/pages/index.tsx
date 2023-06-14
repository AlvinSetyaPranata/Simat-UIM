import Sidebar from '@/components/Sidebar'
// import { tokenChekcer } from '@/hooks/useAuth'
import Head from 'next/head'
import Home from '@/layouts/Home'


export default function Index() {
  return (
    <>
    <Head>
      <title>Dashboard - Preview</title>
    </Head>
    
    <main className='w-full max-h-screen flex'>
      <Sidebar />
      <Home />
    </main>
    </>
  )
}
