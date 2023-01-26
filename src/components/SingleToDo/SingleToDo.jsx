import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleToDO = () => {
    const { id, number } = useParams();
    const [single, setSingle] = useState();
    const navigate = useNavigate();
    
    const resultCurrentId = useMemo(() => (id - 1) * 20 + +number, []);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos/?id=${resultCurrentId}`)
            .then(res => res.json())
            .then(data => {
                setSingle(data);
            })
            .catch(error => console.log(error.message));
    }, []);

    return (
        <div>
            <h1>Single ToDo</h1>
            <button onClick={()=>navigate(-1)}>Go Back</button>
            <p>User Number {id}</p>
            <p>ToDo Number {resultCurrentId}</p>
            {single ?
                <div>
                    <p>userId: {single[0].userId}</p>
                    <p>id: {single[0].id}</p>
                    <p>title: {single[0].title}</p>
                    <p>completed: {single[0].completed ? 'true' : 'false'}</p>
                </div> :
                <div></div>
            }
        </div>
    );
}

export default SingleToDO;