import { lazy } from 'react'

// lazy load components
const CurrencyPage = lazy(() => import('@/pages/CurrencyPage'))
const CurrencyDetail = lazy(() => import('@/pages/CurrencyDetail'))

const routes = {
  '/currency': () => <CurrencyPage />,
  '/currency/:id': ({ id }: { id: string }) => <CurrencyDetail id={id} />,
}

export default routes
