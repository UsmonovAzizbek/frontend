import Axios from 'axios'
import React, {useEffect, useState} from 'react';

function Api() {
    const [apiResponse,setApiResponse]=useState([])
    useEffect(() => {
        fetchUser();
    }, [])
    useEffect(() => {
        console.log(apiResponse)
    }, [apiResponse])
    const fetchUser=async()=>{
        const response=await Axios('https://localhost:8080/api/auth/login');
        setApiResponse(response.data)
    }
    return (
        <div className="Api">
            return(
            <div  style={{alignItems:'center',margin:'20px 60px'}}>
                <h4>{apiResponse.message}</h4>
                <p>{apiResponse.status}</p>
            </div>

        </div>
    );
}

export default Api();