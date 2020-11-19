import './App.css';
import GoalForm from './Components/form';
import BasicTable from './Components/table';
import Table from './Components/table';

function App() {
  return (
    <div className="App">
      <h1>ToDo/Goal Tracker</h1>
      <GoalForm />
      <BasicTable />
    </div>
  )
};

export default App;
