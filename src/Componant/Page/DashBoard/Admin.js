import React from 'react';
import toast from 'react-hot-toast';

const Admin = ({ item, index,refetch }) => {
    const { _id, name, email,role } = item
    const makeAdmin =()=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method: 'PUT',
        })
        .then(res =>res.json())
        .then(data=>{
            refetch();
            toast.success("Succesfully Made An Admin!")
        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{role? role : "Viewr"}</td>
            <td>{role !== "Admin" && <button onClick={()=>makeAdmin()}  className='btn btn-sm btn-danger d-block'>Make Admin</button>}</td>
        </tr>
    );
};

export default Admin;