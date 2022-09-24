import httpCommon from "./http-common";
class LoginService{
    login(data){
        return httpCommon.post("/login.php",data);
    }
    logout(){
        
    }
}
export default new LoginService(); 