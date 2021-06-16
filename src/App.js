import { useState, useEffect } from 'react';
import './App.css';
import User from './components/User/User';

function App() {
  const [users, setUsers] = useState([]);
  const [team , setTeam] = useState([]);
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=15')
      .then(res => res.json())
      .then(data => setUsers(data.results))
  }, [])

  // event handler
  const addMember = (name) =>{
    setTeam([...team, name]);
  }
  return (
    <div className="App-container">
      <h1>Team Builder</h1>
      <div className="display-team-member">
        {
          team.map(m => <div className="team-div">{m}</div>)
        }
      </div>
      {
        users.map(user => <User userInfo={user} addMember={addMember}></User>)
      }
    </div>
  );
}

export default App;
