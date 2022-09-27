// import { map } from 'jquery';
import { useState, useEffect } from 'react';
import {json, useLocation} from 'react-router-dom';

function PostDetail(){
  const location = useLocation();
  const imgIdx = location.state;
  const [postIdx, setPostIdx]=useState(imgIdx);
  const pData = JSON.parse(sessionStorage.pData);
  const maxPostIdx = Object.keys(pData).length - 1
   
  const previousPost = (event)=>{
    event.preventDefault();
    if(postIdx <= 0){
       setPostIdx(0);
    }else{
      setPostIdx((idx)=>{
        return idx-1;
      })
     }
  } 
  
  const nextPost = (event)=>{
    event.preventDefault();
    if (postIdx == maxPostIdx){
      console.log("this is last post!!!")
    } else {
      setPostIdx((idx)=>{
        return idx+1;
      })
    }
  }
  console.log(`Current postIdx: (${postIdx}/${maxPostIdx})`)

  return(
    <>
      <h1>PostDetail Page</h1>
      <section>
        {pData.map((value,idx)=>(
          idx == postIdx ? 
          <figure key={idx}>
            <img src ={value.photo_src} alt ={'img_'+idx}/> 
            <figcaption>
              <h6>Tags</h6>
              <p>{value.tags}</p>
            </figcaption> 
          </figure>:false
        ))}
        {pData.map((value,idx)=>(
          idx == postIdx ? 
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
                  <button onClick={(event)=>previousPost(event)}>{"<"}</button>
                  <button onClick={(event)=>nextPost(event)}>{">"}</button>
                </div>
              </section>
            </article>:false))}
      </section>
    </>
  )
}
export default PostDetail;