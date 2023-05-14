import React, { useEffect, useState } from "react";
/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import EmpServices from "../Services/EmpServices";
import { Link } from "react-router-dom";

const EmployeeList = () => {

    const [emp, setEmp] = useState([]);

    useEffect(() => {
        EmpServices.getAllEmp().then((response) => {
            setEmp(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    }, [])
  
    const deleteEmployee = (id) =>{
            EmpServices.deleteEmployee(id).then((response)=>{
                EmpServices.getAllEmp().then((response) => {
                    setEmp(response.data);
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
            <h2 className="text-center mt-2 mb-4">List Of Employees</h2>
            <Link to="/add-emp" className="btn btn-lg btn-primary mb-3">Add employee's</Link>
            <table className="table text-center table-bordered table-success">
                <thead>
                    <tr className="text-primary">
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        emp.map(
                            employee =>
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                    <td>
                                        <Link className="btn btn-info btn-lg" to={`/edit-emp/${employee.id}`} >Update</Link>
                                        <button style={{margin:"2px"}} onClick={()=>{deleteEmployee(employee.id)}} className="btn btn-danger btn-lg " to={`/delete-emp/${employee.id}`} >Delete</button>
                                    </td>
                                   
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeList;