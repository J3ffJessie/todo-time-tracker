import React, {useState} from 'react';


function Goal(props) {

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
        <table>
            <th>{props.title}</th>
            <tr>{props.content}</tr>
        </table>
    </div>


);
}

export default Goal;
