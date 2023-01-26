import { srcUsers } from '../../linksSrc/links';
import { useEffect, useState } from 'react';
import './Aside.css';
import { NavLink } from 'react-router-dom';

const Aside = () => {
    const [asideNames,setAsideNames] = useState([]);
    useEffect(()=>{
        fetch(srcUsers)
        .then(res=>res.json())
        .then(data=>{
            setAsideNames(data);
        })
        .catch(error=>console.log(error.message));
      },[]);

    const asideLinks = asideNames.map(elem=><p key={elem.name}><NavLink to={'/user/'+elem.id}>{elem.name}</NavLink></p>);
    return (
        <aside>
            {asideLinks.length > 0 ? <>{asideLinks}</> : <>something going wrong</>}
        </aside>
    );
}

export default Aside;