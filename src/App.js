import logo from './logo.svg';
import './App.css';

const h3Style = {
  backgroundColor: 'blue',
  color: 'white',
  padding: '5px'
}

function App() {
  const persons = ['Bappy', 'Rebu', 'Ibrahim', 'Shifat', 'Tanvir'];
  const job = [
    { name: 'bappy', job: 'webDevloper' },
    { name: 'Rebu', job: 'Cricketer' },
    { name: 'Ibrahim', job: 'Totto' },
    { name: 'Shifat', job: 'Ganjuti' },
    { name: 'Tanvir', job: 'Tecacher' },
  ];
  return (

    <div className="App">
      {
        persons.map(person => <li>{person}</li>)

      }

      {
        job.map(person => <MyName name={person.name} job={person.job}></MyName>)
      }

    </div>
  );
}
function MyName(props) {
  return (
    <div className='myname'>
      <h1>{props.name}</h1>
      <p>{props.job}</p>
    </div>
  );
}
function NewFriend(props) {
  return (
    <div className='friendName'>
      <h1>{props.name}</h1>
      <p>{props.job}</p>
    </div>
  );
}

export default App;
