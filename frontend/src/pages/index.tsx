import Sidebar from '@/components/Sidebar'
// import { tokenChekcer } from '@/hooks/useAuth'
import Head from 'next/head'
import Home from '@/layouts/Home'


export default function Index() {
  return (
    <>
    <Head>
      <title>Dashboard - Preview</title>
      <meta name="description" content="Simat UIM Preview" />
      <meta charSet="utf-8" />
      <meta name="author" content="Alvin Setya Pranata" />
      <meta name="keywords" content="simat, uim" />
    </Head>
    
    <main className='w-full max-h-screen flex'>
      <Sidebar />
      <Home />
    </main>
    </>
  )
}
