import { navigate } from '@redwoodjs/router'

const LOCAL_BASIC_AUTH_KEY = 'basic_auth'

const passedBasicAuth = () =>
  localStorage.getItem(LOCAL_BASIC_AUTH_KEY) === process.env.BASIC_AUTH_PASSWORD

const RestrictedContext = React.createContext({
  status: '',
})

const RestrictedProvider = ({ children }) => {
  const [state, setState] = React.useState({
    status: '',
  })
  const { status, passed } = state

  const submitPassword = (password) => {
    if (password === process.env.BASIC_AUTH_PASSWORD) {
      localStorage.setItem(LOCAL_BASIC_AUTH_KEY, password)
      navigate('/')
    } else {
      setState({ status: 'Incorrect password' })
    }
  }

  React.useEffect(() => {
    if (!passedBasicAuth()) navigate('/restricted')
  }, [])

  return (
    <RestrictedContext.Provider
      value={{
        submitPassword,
        status,
      }}
    >
      {children}
    </RestrictedContext.Provider>
  )
}

const useRestricted = () => React.useContext(RestrictedContext)

export { RestrictedProvider, useRestricted }
