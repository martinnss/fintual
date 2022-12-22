import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Investment from './Functions/Investment'
import './index'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Investment></Investment>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
