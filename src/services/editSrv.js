import httpCommon from "./http-common";
class editSrv{
    edit(uid){
        let formdata = new FormData();
        formdata.append("uid",uid);
        return httpCommon.post("/editPost.php", formdata,{
            headers: {
                'content-type':'multipart/form-data'
            }
        });
    }
}
export default new editSrv();
