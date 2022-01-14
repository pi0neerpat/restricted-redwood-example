import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>Congrats, you passed the basic auth, and can now access the app!</p>
      <p>To test again, delete local storage.</p>
    </>
  )
}

export default HomePage
