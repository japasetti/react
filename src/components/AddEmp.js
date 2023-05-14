import { useEffect, useState } from "react";
import EmpServices from "../Services/EmpServices";
import { Link, useNavigate, useParams } from 'react-router-dom';

const AddEmp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');

    const navigate = useNavigate();

    const {id} = useParams();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        const employee = { firstName, lastName, emailId };

        if(id)
        {
          EmpServices.updateEmployee(id, employee).then((response)=>{
            navigate("/emp");
          }).catch(error =>{
            console.log(error);
          })
        }
        else
        {
            EmpServices.createEmp(employee).then((response) => {
                console.log(response.data);
                navigate("/emp");
    
            }).catch(error => {
                console.log(error);
            })
    
        }
    
        }
        
    useEffect(() => {
        EmpServices.getEmpById(id).then((response) => {
            console.log(response.data);
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmailId(response.data.emailId);
        }).catch(error => {
            console.log(error);
        })

    }, [id])

    const title = () => {
        if (id) {
            return <h3 className="text-center mt-2">Update Employee's Data</h3>
        }
        else {
            return <h3 className="text-center mt-2">Add Employee's Data</h3>
        }
    }

    return (
        <div className="container">
            {
                title()
            }
            <form method="post">
                <div className="mb-3">
                    <label className="form-label">First Name </label>
                    <input
                        type="text"
                        value={firstName}
                        name="firstName"
                        className="form-control"
                        placeholder="Enter Your First Name"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name </label>
                    <input
                        type="text"
                        value={lastName}
                        name="lastName"
                        className="form-control"
                        placeholder="Enter Your Last Name"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email Id </label>
                    <input
                        type="email"
                        value={emailId}
                        name="emailId"
                        className="form-control"
                        placeholder="Enter Your Email Id"
                        onChange={(e) => setEmailId(e.target.value)}
                    />
                </div>
                <button className="btn btn-success btn-lg" onClick={(e) => saveOrUpdateEmployee(e)}>Submit</button>
                <Link to="/emp" className="btn btn-danger btn-lg">Cancel</Link>
            </form>
        </div>
    );

}
export default AddEmp;