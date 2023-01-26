import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const UsersToDos = () => {
    const { id } = useParams();
    const [userToDos, setUserToDos] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
            .then(res => res.json())
            .then(data => {
                setUserToDos(data);
            })
            .catch(error => console.log(error.message));
    }, [id]);

    const showUsersToDo = userToDos.map((elem, index) => {
        return <div key={elem.title}><NavLink to={`/user/${id}/todo/${index + 1}`}>{elem.title}</NavLink></div>
    });

    return (
        <div>
            <h1>User's ToDo</h1>
            <h3>User number {id}</h3>
            {showUsersToDo}
        </div>
    );
}

export default UsersToDos;