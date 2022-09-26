import httpCommon from "./http-common";

class imgLoadSrv{
    loadMainImg(){
        return httpCommon.post("/main.php");
    }
    loadDetainImg(formData){
        return httpCommon.post("/postDetail.php");
    }
}
export default new imgLoadSrv();