import axios from 'axios';

function Get(url, data, callback){
    axios.
    get(url, data,{
        'Content-Type': 'application/json',
      })
      .then(res => res.json())
      .then(json => {callback(json)})
      .catch(error => {
        console.log(error)
      })
   
}

export { 
    Get 
}