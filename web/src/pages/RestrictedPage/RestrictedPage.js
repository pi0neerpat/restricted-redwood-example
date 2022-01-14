import { useRestricted } from 'src/providers/restricted'
import { Head } from '@redwoodjs/web'
import { navigate } from '@redwoodjs/router'

const RestrictedPage = () => {
  const { submitPassword, status } = useRestricted()
  const [value, setValue] = React.useState('')
  return (
    <>
      <Head>
        <title>Restricted!</title>
      </Head>
      <main className="not-found">
        <section className="not-found--container">
          <div className="not-found--content">
            <h1>This site is restricted</h1>
            <div className="not-found--content--go-home flex justify-center">
              <input
                placeholder="Password"
                className="restrictedInput"
                onChange={(e) => setValue(e.target.value)}
                value={value}
              />
              <button
                onClick={() => {
                  submitPassword(value)
                }}
              >
                Submit
              </button>
            </div>
            <p>{status}</p>
          </div>
        </section>
      </main>
    </>
  )
}

export default RestrictedPage
