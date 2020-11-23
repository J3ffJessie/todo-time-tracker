import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function Goal(props) {
    function handleClick() {
        props.onDelete(props.id);
    }

    return (
        <div className="goal">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <Zoom in={true}>
                <Fab onClick = {handleClick}>
                    <DeleteIcon />
                </Fab>
            </Zoom>
        </div>
    );
}

export default Goal;