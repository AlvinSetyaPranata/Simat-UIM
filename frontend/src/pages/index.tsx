import Sidebar from '@/components/Sidebar'
import { tokenChekcer } from '@/hooks/useAuth'
import Home from '@/layouts/Home'
import { useRouter } from 'next/router'


export default function Index() {
  const navigator = useRouter()
  
  // if token is expired or missing
  // then it will navigate to login
  if (!tokenChekcer()) {
    navigator.push('/login')
  }



  return (
    <main className='w-max h-max flex'>
      <Sidebar />
      <Home />
    </main>
  )
}
