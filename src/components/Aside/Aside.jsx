import './Aside.css';

const Aside = ({asideLinks}) => {
    return (
        <aside>
            <h1>Aside</h1>
            {asideLinks}
        </aside>
    );
}

export default Aside;