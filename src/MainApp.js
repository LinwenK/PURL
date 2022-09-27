import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import $ from 'jquery';

import RoutingLayout from './pages/RoutingLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/Main';
import PostDetail from './pages/PostDetail';
import AddPost from './pages/AddPost';
import PostDashboard from './pages/PostDashboard';
import EditPost from './pages/EditPost';
import EditUser from './pages/EditUser';
import NoPage from './pages/NoPage';
import userInfo from './services/userInfo';

export default function MainApp(){
  const [user,setUser] = useState("");
  const [post,setPost] = useState();

  const LoginFunction = (userInput) =>{
    setUser(userInput);
  };  

  const pageLoad = ()=>{
    let sid = sessionStorage.getItem("sid");
    if(sid!=null){
      userInfo.loadInfo(sid)
            .then(response=>{
                setUser(response.data)
            })
            .catch(err=>{console.log(err)});
  }
  };
  useEffect(()=>{pageLoad()},[]);

  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/' element={<RoutingLayout loggedUser={user} LogoutFunc={LoginFunction}/>}>
          <Route path='login' element={<Login loginFun={LoginFunction}/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='main' element={<Main/>}/>
          <Route path='postdetail' element={<PostDetail/>}/>
          <Route path='addpost' element={<AddPost User={user}/>}/>
          <Route path='dashboard' element={<PostDashboard User={user} EditPostFunc={setPost}/>}/>
          <Route path='editpost' element={<EditPost Post={post}/>}/>
          <Route path='edituser' element={<EditUser User={user} editUserFun={LoginFunction}/>}/>
        </Route>
        <Route path='*' element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}