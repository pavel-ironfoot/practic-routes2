import { NavLink, useNavigate } from "react-router-dom";

const TuskComponent = ({id,userId,title,completed})=>{
    const navigate= useNavigate();
    const goBack = () =>{
        navigate(-1)
    }
    return (
        <div>
            <h3>Tusk Component</h3>
            <p>userId: {userId}</p>
            <p>id: {id}</p>
            <p>title: {title}</p>
            {completed?<p>completed:true</p>:<p>completed:false</p>}
            <button onClick={goBack}>Previous Page</button>
            <NavLink to={'/'}><h3>Home page</h3></NavLink>
        </div>
    );
}
export default TuskComponent;