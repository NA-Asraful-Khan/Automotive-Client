import { useEffect, useState } from "react";

const useData=()=>{
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/tool`)
        .then(res=>res.json())
        .then(data=>setItems(data.reverse()));
    },[])

    return [items, setItems]
}


export default useData;