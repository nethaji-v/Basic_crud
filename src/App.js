import './App.css';
import Form from './Form-component/Form';
import UserList from './User-component/User-List';
import data from './courses.json'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' Component={UserList}/>
          <Route path='/create'Component={Form}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
