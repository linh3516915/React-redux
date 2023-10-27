import { useDispatch } from 'react-redux'
import { add } from '../reducers/task_slice';
import { useRef } from 'react';

function FormAddTask() {
    const taskName = useRef()
    const dispatch = useDispatch();

    const addTask = () => {
        dispatch(add(taskName.current.value));
    }

    return (
        <>
        <div >
            <label>Task name:</label>
            <input type="text" placeholder="Input name of task" ref={taskName} />
            <button onClick={addTask}>Add</button>
        </div>
        </>
    );
}

export default FormAddTask;