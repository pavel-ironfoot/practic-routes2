import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Sorted = () => {
    const [sortedList, setSortedList] = useState([]);
    const { sorted } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => {
                switch (sorted) {
                    case 'sortedthere': setSortedList([...data].sort((a, b) => a.title > b.title ? 1 : -1));
                        break;
                    case 'sortedback': setSortedList([...data].sort((a, b) => a.title < b.title ? 1 : -1));
                        break;
                    case 'completed': setSortedList(data.filter(elem => elem.completed === true));
                        break;
                    case 'notcompleted': setSortedList(data.filter(elem => elem.completed === false));
                        break;
                    default: setSortedList([{ userId: 'no', title: 'no such tusk in homework! :)', completed: true }])
                }
            })
    }, []);

    const result = sortedList.map(elem => {
        return <li key={elem.title} >User id: {elem.userId}, the title is: {elem.title}, completed: {elem.completed ? 'yes' : 'no'}</li>
    })

    return (
        <div>
            <h1>Sorted</h1>
            <button onClick={() => navigate(-1)}>Go Back</button>
            <ul>
                {result.length > 0 ? <>{result}</> : <>something going wrong</>}
            </ul>
        </div>
    );
}

export default Sorted;