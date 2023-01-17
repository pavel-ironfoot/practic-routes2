const Sorted =({tusks}) =>{
    const toShow=tusks.map(elem=>{
        return <li key={elem.title} >User id: {elem.userId}, the title is: {elem.title}, completed: {elem.completed?'yes':'no'}</li>
      });
    return (
        <div>
            {toShow}
        </div>
    );
}

export default Sorted;