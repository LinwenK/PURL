// import { map } from 'jquery';
import { useState } from 'react';
import {json, useLocation} from 'react-router-dom';

function PostDetail(){
  const location = useLocation();
  const imgIdx = location.state;
  const [postIdx,setPost]=useState([]);
  const pData = JSON.parse(sessionStorage.pData);

  return(
    <>
      <h1>PostDetail Page</h1>
      <section>
        {pData.map((value,idx)=>(
          idx == imgIdx ? 
          <figure>
            <img src ={value.photo_src} alt ={'img_'+idx}/> 
            <figcaption>
              <h6>Tags</h6>
              <p>{value.tags}</p>
            </figcaption> 
          </figure>:false
        ))}
        {pData.map((value,idx)=>(
          idx == imgIdx ? 
            <article key={idx}>
              <figure>
                <img src = {value.photo_src} />
              </figure>
              <section>
                <div>
                  <aside></aside>
                  <p>{value.user_id}</p>
                  <p>{value.post_date}</p>
                </div>
                <div>
                  <h3>{value.tags}</h3>
                </div>
                <div>
                  <button>location</button>
                  <button>Download</button>
                </div>
                <div>
                  <button>{"<"}</button>
                  <button>{">"}</button>
                </div>
              </section>
            </article>:false))}
      </section>
    </>
  )
}
export default PostDetail;