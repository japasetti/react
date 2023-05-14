import axios from 'axios';

const Rest_Api_Call_GET="http://localhost:8080/show/all/data";

const Rest_Api_Call_Post="http://localhost:8080/show/create";

const Rest_Api_Call_Id="http://localhost:8080/show";

const Rest_Api_Call_Update="http://localhost:8080/show/update";

const Rest_Api_Call_Delete="http://localhost:8080/show/delete";

class EmpServices
{
   getAllEmp()
   {
    return axios.get(Rest_Api_Call_GET);
   }
   createEmp(employee)
   {
      return axios.post(Rest_Api_Call_Post, employee);
   }
  getEmpById(id)
  {
      return axios.get(Rest_Api_Call_Id+"/"+id);
  }
  updateEmployee(id, employee)
  {
    return axios.put(Rest_Api_Call_Update+"/"+id, employee);
  } 
  deleteEmployee(id)
  {
     return axios.delete( Rest_Api_Call_Delete + "/" +id);
  }

}

export default new EmpServices();