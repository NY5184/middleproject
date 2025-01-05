
import './App.css';
import Todos from './components/todos/Todos';
import Posts from './components/posts/Posts';
import Users from './components/users/Users';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import './index.css';
import './flags.css';
import {Link, Route, Routes} from 'react-router-dom'
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';



function App() {
  const navigate = useNavigate();
  const items = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      command: () => {
        navigate('./Home')}
    },

    {
      label: 'Users',
      icon: 'pi pi-users',
      command: () => {
        navigate('./users/Users')
      }
    },
    {
      label: 'Posts',
      icon: 'pi pi-file',
      command: () => {
        navigate('./posts/Posts')
      }
    },

    {
      label: 'Todos',
      icon: 'pi pi-list-check',
      command: () => {
        navigate('./todos/Todos')
      }
    }
  ];

  return (
    <div className="App">
      {<div className="card">
        <Menubar model={items} />
      </div>}
      <Link to={'/User/Users'}></Link>
      <Link to={'/Todo/Todos'}></Link>
      <Link to={'/Post/Posts'}></Link>


      <Routes>
      <Route path='/Home' element={<h1>home</h1>}></Route>
        <Route path='/users/Users' element={<Users />}></Route>
        <Route path='/todos/Todos' element={<Todos />}></Route>
        <Route path='/posts/Posts' element={<Posts />}></Route>
      </Routes>


    </div>

  )
}


export default App;
