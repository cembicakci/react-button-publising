import React from 'react'

import { ExampleComponent, Button} from 'cembtnui'
import 'cembtnui/dist/index.css'

const App = () => {
  return (
    <>
      <ExampleComponent text='Merhaba' />
      <Button text='Click' onClick={() => { alert('Button') }} />
    </>
  )
}

export default App
