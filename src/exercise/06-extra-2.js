// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [errorMessage, setErrorMessage] = React.useState()

  const handleChange = event => {
    const isValid = event.target.value === event.target.value.toLowerCase()
    setErrorMessage(isValid ? null : 'Username must be lower case')
  }

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(event.target.elements[0].value)
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <div>
          <input
            id="usernameInput"
            onChange={e => handleChange(e)}
            type="text"
          />
          {errorMessage && <span role="alert">{errorMessage}</span>}
        </div>
      </div>
      <button disabled={errorMessage ? true : false} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
