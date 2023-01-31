import { $get } from './api'
import useEffectOnce from './hooks/useEffectOnce'
import { Link, useRoutes } from 'raviger'
import routes from './routes'
import { UserDataType } from './types/user'
import { Suspense } from 'react'

function App() {
  const route = useRoutes(routes)

  // get list data from koa-temp repo.
  // domain: http://localhost:3000/api
  const getTest = async () => {
    const result = await $get<UserDataType>('/users', {
      current: 1,
      page_size: 10,
    })

    if (!result) return

    console.log(result)
  }

  useEffectOnce(() => {
    getTest()
  })

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <h1>Vite + React</h1>
        <Link href="/user">User</Link>
        <Link href="/user/1">User 1 Page</Link>
        {route}
      </Suspense>
    </div>
  )
}

export default App
