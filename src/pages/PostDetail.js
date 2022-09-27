// import { map } from 'jquery';
import { useState, useEffect } from 'react';
import {json, useLocation} from 'react-router-dom';

function PostDetail(){
  const location = useLocation();
  const imgIdx = location.state;
    console.log("first : "+imgIdx);
  const [postIdx,setPostIdx]=useState("");
  const pData = JSON.parse(sessionStorage.pData);
  
  // setPostIdx(imgIdx);
  useEffect(()=>{
    setPostIdx(imgIdx);
    console.log("i" + imgIdx);
    console.log("p"+postIdx);
  })

  const previousPost = (event)=>{
    event.preventDefault();
    // if(postIdx <= 0){
    //   console("idx 0!!!!!!");
    //   setPostIdx(0);
    // }else{
    //   setPostIdx((idx)=>{
    //     return idx-1;
    //   })
    //   console.log("1234"+postIdx);
    // }

  } 
  
  const nextPost = ()=>{
    console.log("next");
    console.log("next"+imgIdx);
    if(imgIdx <= 0 ){
      imgIdx = 0;
    }else{
      imgIdx ++;
      setPostIdx(imgIdx);
    }
  }

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
                  <button onClick={nextPost}>{">"}</button>
                </div>
              </section>
            </article>:false))}
      </section>
    </>
  )
}
export default PostDetail;