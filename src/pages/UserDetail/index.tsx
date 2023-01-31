import { $get } from '@/api'
import { GlobalContext } from '@/context/GlobalContext'
import useEffectOnce from '@/hooks/useEffectOnce'
import { UserDataType } from '@/types/user'
import { useContext } from 'react'

const UserDetail = ({ id }: { id: string }) => {
  const { username, gender, setGlobalContext } = useContext(GlobalContext)

  const getTest = async () => {
    const result = await $get<UserDataType>(`/user/${id}`)

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

export default UserDetail
