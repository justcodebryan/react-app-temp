import { $get } from './api'
import useEffectOnce from './hooks/useEffectOnce'
import { Link, useRoutes } from 'raviger'
import routes from './routes'
import { Currency } from './types/currency'
import { Suspense, useState } from 'react'
import { GlobalContext, GlobalContextType, defaultGlobalContext } from './contexts/GlobalContext'

function App() {
  const route = useRoutes(routes)
  const [globalContext, setGlobalContext] = useState<GlobalContextType>({
    ...defaultGlobalContext,
  })

  // get list data from koa-temp repo.
  // domain: http://localhost:3000/api
  const getTest = async () => {
    const result = await $get<Currency>('/currencies', {
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
      <GlobalContext.Provider value={{ ...globalContext, setGlobalContext }}>
        <Suspense fallback={<div>Loading...</div>}>
          <h1>Vite + React</h1>
          <Link href="/currency">currency</Link>
          <br />
          <Link href="/currency/1">currency 1 Page</Link>
          {route}
        </Suspense>
      </GlobalContext.Provider>
    </div>
  )
}

export default App
