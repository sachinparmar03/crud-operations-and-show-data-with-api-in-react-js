import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Adddata from './Adddata';
import Displaydata from './Displaydata';
import Editdata from './Editdata';
import Viewdata from './Viewdata';


function App() {

  return (
    <div>
      <Router>
        <h1>
          <ul>
            <li><a href="#news"><Link to="/Adddata">Add</Link></a></li>
            <li><a href="#contact"><Link to="/Displaydata">Display</Link></a></li>
          </ul>
        </h1>
        <Routes>
          <Route path="/" element={<Adddata />} />
          <Route path="/Adddata" element={<Adddata />} />
          <Route path="/Displaydata" element={<Displaydata />} />
          <Route path="/Editdata/:id" element={<Editdata />} />
          <Route path="/Viewdata/:id" element={<Viewdata />} />
        </Routes>
      </Router>

    </div>
  );
}
export default App;