import httpCommon from "./http-common";

class imgLoadSrv{
<<<<<<< HEAD
    load(data){
        return httpCommon.post("/main.php",data);
    }
}

=======
    load(){
        return httpCommon.post("/main.php");
    }
}
>>>>>>> jun
export default new imgLoadSrv();