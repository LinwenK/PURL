import httpCommon from "./http-common";
class dashboardLoad{
    load(){
        return httpCommon.post("/display.php");
    }
}

export default new dashboardLoad();