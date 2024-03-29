import { useEffect, useState } from "react"

const useToken = user =>{
    const [token, setToken] = useState('');
    useEffect(()=>{
        const email = user?.user?.email;
        const name = user?.user?.displayName;
        const currentUser={email:email,name:name};
        if(email){
            fetch(`https://automotive-server.vercel.app/user/${email}`,{
                method:'PUT',
                headers: {
                    'content-type':'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data=>{
                const accessToken = data.token;
                localStorage.setItem('AccessToken',accessToken);
                setToken(accessToken);
            })
        }
    },[user])
    return [token];
}

export default useToken;