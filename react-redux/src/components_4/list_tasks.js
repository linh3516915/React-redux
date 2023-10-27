import { useDispatch, useSelector } from 'react-redux'
import { del } from '../reducers/task_slice';

function ListTasks() {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.task.list); // state -> lay ra tu redux store

    const delTask = (name) => {
        dispatch(del(name));
    }

    return (
        <>
        <div>
            <h3 >List of tasks:</h3>
            {
                tasks.map(function(task, idx){
                    return (
                        <div  key={idx}>
                            <p>{task}</p>
                            <button onClick={() => delTask(task)}>X</button>
                        </div>
                    );
                })
            }
        </div>
        </>
    );
}

export default ListTasks;