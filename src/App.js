import React, {useEffect} from 'react';
import axios from 'axios';
// import crypto from 'crypto';
import CryptoJS from 'crypto-js'

const App = () => {
  const time = Date.now()
  // const a = crypto.createHash('AQAAAABVQYDzMiowYGSXN8tLe1nx9ezUHZjOMQlQ+LgZ+3uPoQ==', time +'.' +http method + '.' + request uri).update("this_is_base_string").digest('hex')
  const a =  CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse('AQAAAABVQYDzMiowYGSXN8tLe1nx9ezUHZjOMQlQ+LgZ+3uPoQ=='));
  const getData = async() =>{
    const response = await axios.get(`/keywordstool`,{
      params : {
        // 'siteId' : 'site',
        // 'biztpId':'275956',
        // 'hintKeywords':'마스크',
        // 'event':' ',
        // 'month':'',
        // 'showDetail':'1',
      },
      headers:{
        'X-Timestamp':time, 
        'X-API-KEY': '0100000000554180f3322a3060649737cb4b7b59f1c2bd1ebca486d667ca7ccea5b5ccce65', 
      'X-API-SECRET': "AQAAAABVQYDzMiowYGSXN8tLe1nx9ezUHZjOMQlQ+LgZ+3uPoQ==", 
      'X-CUSTOMER': "275956", 
      'X-Signature':`${time}.GET./ncc/campaigns`
      },
    });
    // setList(response.data.items)
  }
  
  useEffect(()=>{
    getData()
  },[]);

  return (
    <div>
      {time}
    </div>
  );
};

export default App;