import httpCommon from "./http-common";

class imgLoadSrv{
    load(){
        return httpCommon.post("/main.php");
    }
}
export default new imgLoadSrv();