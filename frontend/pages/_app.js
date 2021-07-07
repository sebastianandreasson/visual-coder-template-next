import { RecoilRoot } from 'recoil'
import { createClient, Provider } from 'urql'

const client = createClient({
  url: '/admin/api',
})

const App = ({ Component, pageProps }) => {
  return (
    <Provider value={client}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </Provider>
  )
}

export default App
