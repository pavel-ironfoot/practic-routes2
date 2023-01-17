
import { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import { src, srcUsers } from './linksSrc/links';
import Main from './components/Main/Main';
import TuskComponent from './components/TuskComponent/TuskComponent';
import UserTusks from './components/UserTusks/UserTusks';
import Sorted from './components/Sorted/Sorted';

function App() {
  const [asideNames,setAsideNames] = useState([]);
  const [todoList, setTodoList] = useState([]);
  const [newList,setNewList] = useState([]);

  useEffect(()=>{
    fetch(src)
    .then(res=>res.json())
    .then(data=>{
        setTodoList(data);
    })
    .catch(error=>console.log(error.message));
},[]);

const result = todoList.map(elem=>{
  return <li key={elem.title} >User id: {elem.userId}, the title is: {elem.title}, completed: {elem.completed?'yes':'no'}</li>
})

const sortList =()=>{
  if(todoList[0].title < todoList[1].title){
    const result = todoList.sort((a,b)=>a.title < b.title ? 1 : -1).map(elem=>{
        return <li key={elem.title} >User id: {elem.userId}, the title is: {elem.title}, completed: {elem.completed?'yes':'no'}</li>
    })
     setNewList(result);
  }else{
    const result = todoList.sort((a,b)=>a.title > b.title ? 1 : -1).map(elem=>{
      return <li key={elem.title} >User id: {elem.userId}, the title is: {elem.title}, completed: {elem.completed?'yes':'no'}</li>
  })
   setNewList(result);
  }
}

const showCompleted = () =>{
  const result = todoList.filter(elem=>elem.completed===true).map(elem=>{
      return <li key={elem.title} >User id: {elem.userId}, the title is: {elem.title}, completed: {elem.completed?'yes':'no'}</li>
  })
  setNewList(result)
}
const showNoCompleted = () =>{
  const result = todoList.filter(elem=>elem.completed===false).map(elem=>{
      return <li key={elem.title} >User id: {elem.userId}, the title is: {elem.title}, completed: {elem.completed?'yes':'no'}</li>
  })
  setNewList(result)
}
const showAll = () =>{
  setNewList((todoList.map(elem=>{
      return <li key={elem.title} >User id: {elem.userId}, the title is: {elem.title}, completed: {elem.completed?'yes':'no'}</li>
  })));
}

useEffect(()=>{
  fetch(srcUsers)
  .then(res=>res.json())
  .then(data=>{
      setAsideNames(data);
  })
  .catch(error=>console.log(error.message));
},[]);

const asideLinks = asideNames.map(elem=><p key={elem.name}><NavLink to={'/'+elem.id}>{elem.name}</NavLink></p>);

const dataForUsers = useMemo(()=>{
  let biggestUserId=0;
  todoList.forEach(elem=>biggestUserId>elem.userId?biggestUserId:biggestUserId=elem.userId);
  const todoListSortForUsers =[];
  for(let i=1;i<=biggestUserId;i++){
    todoListSortForUsers.push(todoList.filter(elem=>elem.userId===i))
  }
  return todoListSortForUsers;
},[todoList]);

const usersRoutes = dataForUsers.map((elem,index)=><Route key={elem[0].title} path={'/'+(index+1)} element={<UserTusks information={elem} />}/>);

const manyRoutes = todoList.map(elem=><Route key={elem.title} path={'/title'+elem.id} element={<TuskComponent id={elem.id} userId={elem.userId} title={elem.title} comleted={elem.completed} />} />);

const forCompleted = useMemo(()=>todoList.filter(elem=>elem.completed===true),[todoList]);
const forNotCompleted = useMemo(()=>todoList.filter(elem=>elem.completed===false),[todoList]);

const sortedAB = useMemo(()=>[...todoList].sort((a,b)=>a.title > b.title ? 1 : -1),[todoList]);
const sortedBA = useMemo(()=>[...todoList].sort((a,b)=>a.title < b.title ? 1 : -1),[todoList]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Aside asideLinks={asideLinks}/>
        <Routes>
          {usersRoutes}
          <Route path='/' element ={
            <Main 
              newList={newList} 
              result={result} 
              showAll={showAll} 
              showCompleted={showCompleted} 
              showNoCompleted={showNoCompleted} 
              sortList = {sortList}
            />
          } />
          {manyRoutes}
        <Route path='/completed' element={<Sorted tusks ={forCompleted} />} />
        <Route path='/notcompleted' element={<Sorted tusks ={forNotCompleted} />} />
        <Route path='/sortedthere' element={<Sorted tusks ={sortedAB} />} />
        <Route path='/sortedback' element={<Sorted tusks ={sortedBA} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
