import React from 'react';
import useData from '../../../Hooks/useData';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
    const [items, setItems] = useData();
    const handleDelet = (id) => {
        const modal ={}
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
            const url = `http://localhost:5000/tool/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = items.filter(item => item._id !== id);
                        setItems(remaining);
                    }
                })
        }

    }
    return (
        <div>
            <h2>Manage Procducts</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>Favorite Color</th>
                            <th>Favorite Color</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.slice(0, 6).reverse().map((item, index) => <ManageProduct
                                key={item._id}
                                item={item}
                                index={index}
                                handleDelet={handleDelet}
                            ></ManageProduct>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;