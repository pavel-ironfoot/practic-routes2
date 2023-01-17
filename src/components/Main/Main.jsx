import React, {useEffect, useState} from 'react';
import './Main.css';
const Main = ({showAll,showCompleted,showNoCompleted,result,newList,sortList}) => {

    return (
        <div>
            <h1>Main</h1>
            <button onClick={showCompleted}>completed</button>
            <button onClick={showNoCompleted}>not completed</button>
            <button onClick={showAll}>all</button>
            <button onClick={sortList}>sort</button>
            <ul>
                {newList.length===0?<>{result}</>:<>{newList}</>}
            </ul>
        </div>
    );
}

export default Main;