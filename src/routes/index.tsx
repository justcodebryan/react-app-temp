import { lazy } from 'react'

// lazy load components
const UserPage = lazy(() => import('@/pages/User'))
const UserDetail = lazy(() => import('@/pages/UserDetail'))

const routes = {
  '/user': () => <UserPage />,
  '/user/:id': ({ id }: { id: string }) => <UserDetail id={id} />,
}

export default routes
