import React, {useState} from 'react';
import CreateGoal from './Components/input';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Goal from './Components/form';



function App() {
  const [goals, setGoals] = useState([]);

  function addGoal(newGoal) {
    setGoals(prevGoals => {
      return[...prevGoals, newGoal];
    });
  }

  function deleteGoal(id) {
    setGoals(prevGoals => {
      return prevGoals.filter((goalItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateGoal onAdd={addGoal} />
      {goals.map((goalItem, index) => {
        return (
          <Goal
          key={index}
          id={index}
          title={goalItem.title}
          content={goalItem.content}
          onDelete={deleteGoal} />
        );
      })}
      <Footer />
    </div>
  );
}


export default App;