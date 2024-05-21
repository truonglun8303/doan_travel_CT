import React, { useEffect, useState } from "react";
import axios from 'axios';

const Home = () => {
  const [data,setData] = useState([]);
  useEffect(() =>{
      axios.get('http://localhost:8081/Admin')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  })
  return (
   <>
      {
        data.map((item,key) =>(
          <tr key={key}>
              <td td>{item.user}</td>
              <td>{item.password}</td>
          </tr>
        ))
      }
      
   </>
  );
};

export default Home;
