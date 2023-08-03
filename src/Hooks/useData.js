import { useEffect, useState } from "react";

const useData=()=>{
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch(`https://automotive-server.vercel.app/tool`)
        .then(res=>res.json())
        .then(data=>setItems(data.reverse()));
    },[])

    return [items, setItems]
}


export default useData;