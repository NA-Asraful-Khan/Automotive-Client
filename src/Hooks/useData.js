import { useEffect, useState } from "react";

const useData=()=>{
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch(`https://cryptic-woodland-87675.herokuapp.com/tool`)
        .then(res=>res.json())
        .then(data=>setItems(data.reverse()));
    },[])

    return [items, setItems]
}


export default useData;