import React from 'react';
import useFetch from '../hooks/useFetch';

const Data = () => {
   const{data, loading, error} = useFetch("users")
   console.log(data, loading, error);

    return(
        <div>
          <h3>Data</h3>
          <ul>
              {data.map((usr)=> <li key={usr.id}>{usr.fullName}</li> )}
          </ul>



        </div>
    )
}

export { Data }