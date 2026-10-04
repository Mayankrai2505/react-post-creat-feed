import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Createpost from './pages/Create-post'
import Feed from './pages/Feed'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/create-post' element={<Createpost/>}/>
        <Route path='/feed' element={<Feed/>}/>
      </Routes>
    </Router>
  )
}

export default App
