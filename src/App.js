import {useState} from 'react'
import './App.css';
import { Table } from './Components/Table/Table';
import Form from './Components/Form/Form';
const usersList = [
  { id: 1, firstName: "ali", lastName: 'Komijani', job: 'developer' },
  { id: 2, firstName: "sahar", lastName: 'alizade', job: 'developer' },
]
function App() {
const [users, setUsers] = useState(usersList)
const [user, setUser] = useState({ firstName: "", lastName: '', job: '' })
  return (
    <div>
      <Table user={user} setUser={setUser} setUsers={setUsers} users={users}/>
      <Form user={user} setUser={setUser} setUsers={setUsers} users={users}/>
      <button> i have no style</button>
    </div>
  );
}

export default App;
