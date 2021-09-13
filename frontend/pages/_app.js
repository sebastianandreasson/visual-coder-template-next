import { createClient, Provider } from 'urql'

const client = createClient({
  url: '/admin/api',
})

const App = ({ Component, pageProps }) => {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
