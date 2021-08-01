// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('')

  const handleChange = event => {
    setUsername(event.target.value.toLowerCase())
  }

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(username)
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          onChange={e => handleChange(e)}
          type="text"
          value={username}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
