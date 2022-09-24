import {useLocation} from 'react-router-dom';

function PostDetail(){
  const location = useLocation();

  // const userId = location.state.userId;
  const userId = localStorage.getItem("userId");


  console.log(userId);

  return(
    <>
      <h1>PostDetail Page {userId}</h1>
    </>
  )
}
export default PostDetail;