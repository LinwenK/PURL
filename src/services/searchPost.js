import httpCommon from "./http-common";
class searchPostSrv{
    search(){
        return httpCommon.post("/search.php");
    }
}
export default new searchPostSrv();