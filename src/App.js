
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import SingleToDO from './components/SingleToDo/SingleToDo';
import Sorted from './components/Sorted/Sorted';
import UsersToDos from './components/UsersToDos/UsersToDo';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Aside />
        <Routes>
          <Route path='*' element={<div><h3>No way like that</h3></div>} />
          <Route path='/user/:id' element={<UsersToDos />} />
          <Route path='/practic-routes2' element={<Navigate to='/homepage'/>} />
          <Route path='/homepage/' element={<Main />} />
          <Route path='/user/:id/todo/:number' element={<SingleToDO />} />

          <Route path='/homepage/:sorted' element={<Sorted tusks={Sorted} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
