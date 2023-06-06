import Sidebar from '@/components/Sidebar'
// import { tokenChekcer } from '@/hooks/useAuth'
import Home from '@/layouts/Home'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { InferGetServerSidePropsType } from 'next'
import Cookies from 'js-cookie'


export async function getData() {
  const data = await fetch(`${process.env.BASE_URL}/api/user/`, {
    method: 'GET',
    headers: {
      'X-CSRFToken' : Cookies.get('csrftoken'),
      'Authorization' : `JWT ${Cookies.get('access')}`,
      'Content-Type' : 'application/json'
    }
  })

  return data.json()
}


export default function Index() {
  
  // if token is expired or missing
  // then it will navigate to login
  const data = getData()

  return (
    <>
    <Head>
      <title>Dashboard</title>
    </Head>
    
    <main className='w-max h-max flex'>
      <Sidebar />
      <Home />
    </main>
    </>
  )
}
