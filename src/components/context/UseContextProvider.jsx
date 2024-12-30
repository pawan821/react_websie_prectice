// import axios from 'axios';
import axios from '../../unitls/axiosconfig';
import React, { Children, useEffect, useState } from 'react'
export const userContext = React.createContext();
const UseContextProvider = ({ children }) => {
    
  const [product, setproduct] = useState([]);
  const [loading, setloading] = useState(false);

  
  useEffect(() => {
    const getallproduct = async () => {
      try {
        setloading(true);
        const { data } = await axios.get('/products');
        setproduct(data);
      }
      catch (error) {
        console.log(error);
      }
      finally {
        setloading(false);
      }
    }
    getallproduct();
  }, [])

  return (
    <userContext.Provider value={{ product, setproduct, loading }}>
      {children}
    </userContext.Provider>
  )
}
export default UseContextProvider
