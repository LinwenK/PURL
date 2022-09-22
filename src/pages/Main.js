import { useNavigate } from 'react-router-dom';

function Content(){
  const navigate = useNavigate();

  const goToPostDetail = () => {
    navigate("/postdetail");
  }
  return(
    <>
      <figure className="content" onClick={goToPostDetail}>
        <aside className="content-img"></aside>
        <figcaption>
          <h6>Tags</h6>
          <p>somewhere street ave</p>
        </figcaption>
      </figure>
    </>
  )
}

function Main(){
  return(
    <>
      <h1>Main Page</h1>
      <Content/>
    </>
  )
}
export default Main;