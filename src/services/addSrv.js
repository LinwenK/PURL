import httpCommon from "./http-common";
class addSrv{
    add(){
        let formdata = new FormData();
        formdata.append("uid",uid);
        return httpCommon.post("/addPost.php", formdata,{
            headers: {
                'content-type':'multipart/form-data'
            }
        });
    }
}
export default new addSrv();
