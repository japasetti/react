
import axios from "axios";

const Rest_Get_All_Data="http://localhost:8080/engine/details";

const Rest_Create_Data_Resource="http://localhost:8080/create/resource";

const Rest_Get_By_Id="http://localhost:8080/get";

const Rest_Update_Data="http://localhost:8080/update"

const Rest_Delete_By_Id="http://localhost:8080/delete";

class EngineService
{
    getAllEngineDetails()
    {
        return axios.get(Rest_Get_All_Data);
    }
    createResource(engine)
    {
        return axios.post(Rest_Create_Data_Resource, engine);
    }
    getById(id)
    {
       return axios.get(Rest_Get_By_Id+"/"+id);
    }
    updateEng(id, engine)
    {
       return axios.put(Rest_Update_Data+"/"+engine,id);
    }
    delete(id)
    {
      return axios.delete(Rest_Delete_By_Id+"/"+id);
    }
}
export default new EngineService();


