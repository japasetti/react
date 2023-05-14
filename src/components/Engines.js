import { useEffect, useState } from "react";
import EngineService from "../Services/EngineService";
import { Link } from "react-router-dom";

const Engines = () => {

  const [engine, setEngine] =useState([]);
  
  useEffect(()=>{
        EngineService.getAllEngineDetails().then((response)=>{
                setEngine(response.data);
            }).catch(error=>{
                console.log(error);
            })

     },[])

     const deleteEng = (id) =>{
        EngineService.delete(id).then((response)=>{
            EngineService.getAllEngineDetails().then((response) => {
                setEngine(response.data);
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            });
            console.log(response.data);


        }).catch(error=>{
            console.log(error);
        })
}
    return ( 
        <div className="container">
            <h2 className="text-center">List Of Engine Details</h2>
            <Link className="btn btn-primary btn-lg mb-2" to="/add-eng">Add Details</Link>
            <table className="table table-success text-black table-bordered">
               <thead>
                <tr>
                <th>Id</th>
                <th>Cost</th>
                <th>E-Type</th>
                <th>E-Name</th>
                <th>E-Material</th>
                <th>Actions</th>
                </tr>
               </thead>
               <tbody>
                {
                    engine.map(
                        eng=>
                        <tr key={eng.id}>
                            <td>{eng.id}</td>
                            <td>{eng.cost}</td>
                            <td>{eng.type}</td>
                            <td>{eng.name}</td>
                            <td>{eng.material}</td>
                            <td>
                            <Link className="btn btn-info " to={`/edit-eng/${eng.id}`} >Update</Link>
                            <button type="button" className="btn btn-danger" onClick={()=>deleteEng(eng.id)}>Delete</button>  
                            </td>
                        </tr> 
                    )
                }
                   </tbody>
            </table>
        </div>
     );
}
 
export default Engines;