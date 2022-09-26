import httpCommon from "./http-common";
class addSrv{
    add(){
        return httpCommon.post("/addPost.php");
    }
};
export default new addSrv();
