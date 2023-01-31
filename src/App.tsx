import { $get } from './api'
import useEffectOnce from './hooks/useEffectOnce'
import { UserDataType } from './types/user'

function App() {
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
      <h1>Vite + React</h1>
    </div>
  )
}

export default App
