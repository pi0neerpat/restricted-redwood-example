import { RestrictedProvider } from './restricted'

const AllContextProviders = ({ children }) => {
  // Add additional context providers here
  // This will be automatically injected in to the App and Storybook

  return <RestrictedProvider>{children}</RestrictedProvider>
}

export default AllContextProviders
