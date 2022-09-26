import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import $ from 'jquery';
import userInfo from './services/userInfo';


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


export default function MainApp(){

  //linwen
  const [user,setUser] = useState("");
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
    //         $.ajax({
    //             type:"POST",
    //             url:"http://localhost/reactServer/sidChk.php",
    //             data:{sid:user.sid},
    //             success(data){
    //                 setUser(JSON.parse(data));

    //             }
    //         })
    //     } 
    // };
  useEffect(()=>{pageLoad()},[user]);
    //

    
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>


        {/* <Route path='/' element={<RoutingLayout/>}> */}
        <Route path='/' element={<RoutingLayout loggedUser={user}/>}>

          {/* <Route path='login' element={<Login/>}/> */}
          <Route path='login' element={<Login loginFun={LoginFunction}/>}/>

          <Route path='register' element={<Register/>}/>
          <Route path='main' element={<Main/>}/>
          <Route path='postdetail' element={<PostDetail/>}/>
          <Route path='addpost' element={<AddPost/>}/>
          <Route path='dashboard' element={<PostDashboard/>}/>
          <Route path='editpost' element={<EditPost/>}/>
          <Route path='edituser' element={<EditUser/>}/>
        </Route>
        <Route path='*' element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}