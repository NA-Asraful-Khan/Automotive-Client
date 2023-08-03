import React, { useEffect, useState } from 'react';
import {useQuery,refetch} from 'react-query'
import Loading from '../../SharePage/Loading';
import Admin from './Admin';

const MakeAdmin = () => {
    const { data: person, isLoading,refetch } = useQuery('person', () => fetch(`https://automotive-server.vercel.app/user`).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2>User List {person.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            person.map((item, index) => <Admin
                                key={item._id}
                                item={item}
                                index={index}
                                refetch={refetch}
                            ></Admin>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;