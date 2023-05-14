
import { useEffect, useState } from "react";
import EngineService from "../Services/EngineService";
import { Link, useNavigate, useParams } from "react-router-dom";

const AddEngine = () => {

    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [material, setMaterial] = useState('');
    const [cost, setCost] = useState('');

    const { id } = useParams();


    const navigate = useNavigate();

    const saveOrUpdateEngine = (e) => {
        e.preventDefault();

        const data = { type, name, material, cost };

        if (id) {
            EngineService.updateEng(data, id).then((response)=>{
             navigate("/engines"); 
            }).catch(error=>{
                console.log(error);
            })
        }

        else {
            EngineService.createResource(data).then((response) => {
                navigate("/engines");
            }).catch(error => {
                console.log(error);
            })

        }
    }


    useEffect(() => {
        EngineService.getById(id).then((response) => {
            setType(response.data.type);
            setName(response.data.name);
            setMaterial(response.data.material);
            setCost(response.data.cost);
        }).catch(error => {
            console.log(error);
        })
    }, [])

    const title = () => {
        if (id) {
            <h2 className="text-center">Update Engine Details</h2>
        }
        else {
            <h2 className="text-center">Add Engine's Data</h2>
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3  mt-3">
                    {
                        title()
                    }
                    <div className="card-body">
                        <form className="text-primary fw-3">
                            <div className="form-group mb-2">
                                <label className="form-lable">Engine's Type</label>
                                <input type="text"
                                    placeholder="Enter Type Of Engine"
                                    name="type"
                                    className="form-control "
                                    value={type}
                                    onChange={(e) => setType(e.target.value)} />
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-lable">Engine's Name</label>
                                <input type="text"
                                    placeholder="Enter The Engine Name"
                                    name="name"
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} />
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-lable">Engine's Material</label>
                                <input type="text"
                                    placeholder="Enter Type Of Material"
                                    name="material"
                                    className="form-control"
                                    value={material}
                                    onChange={(e) => setMaterial(e.target.value)} />
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-lable">Engine's Cost</label>
                                <input type="text"
                                    placeholder="Enter Cost Of The Engine's"
                                    name="cost"
                                    className="form-control"
                                    value={cost}
                                    onChange={(e) => setCost(e.target.value)} />
                            </div>
                            <button type="button" className="btn btn-success" onClick={(e) => saveOrUpdateEngine(e)}>Save</button>
                            <Link to="/engines" className="btn btn-danger">Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AddEngine;