import { NavLink } from 'react-router-dom';

const UserTusks = ({information}) =>{
    return (
        <div>
            <h3>User Tusks</h3>
            {/* new new new */}
            {information.map(elem=><p key={elem.title}><NavLink to={'/title'+elem.id}>{elem.title}</NavLink></p>)}
        </div>
    );
}
export default UserTusks;