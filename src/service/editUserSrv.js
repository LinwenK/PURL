import httpCommon from "./http-common";
class editUserSrv{
    edit(){
        return httpCommon.post("/editUser.php");
    }
}
export default new editUserSrv();