import { $get } from '@/api'
import { GlobalContext } from '@/contexts/GlobalContext'
import useEffectOnce from '@/hooks/useEffectOnce'
import { CurrencyDataType } from '@/types/currency'
import { useContext } from 'react'

const CurrencyDetail = ({ id }: { id: string }) => {
  const { username, gender, setGlobalContext } = useContext(GlobalContext)

  const getTest = async () => {
    const result = await $get<CurrencyDataType>(`/currency/${id}`)

    if (!result) return

    console.log(result)

    const { data } = result

    setGlobalContext?.({
      username: data.name,
      gender: data.gender,
    })
  }

  useEffectOnce(() => {
    getTest()
  })

  return (
    <>
      <div>id: {id}</div>
      <div>username: {username}</div>
      <div>gender: {gender}</div>
    </>
  )
}

export default CurrencyDetail
