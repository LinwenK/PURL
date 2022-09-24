import httpCommon from "./http-common";

class imgLoadSrv{
    load(data){
        return httpCommon.post("/main.php",data);
    }
}

export default new imgLoadSrv();