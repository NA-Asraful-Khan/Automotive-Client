import React from 'react';
import toast from 'react-hot-toast';

const Admin = ({ item, index,handleUserDelete,refetch }) => {
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
            <td>{role !== "Admin" && <button onClick={()=>makeAdmin()}  className='btn btn-danger d-block m-2'>Make Admin</button>}</td>
            
            <td><button onClick={()=>handleUserDelete(_id)} className='btn btn-danger d-block m-2'>Delete User</button></td>
        </tr>
    );
};

export default Admin;