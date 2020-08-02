import axios from 'axios';

function GetJson(url, callback){
    axios.
    get(url, {},{
        'Content-Type': 'application/json',
      })
      .then(result => {
          if (result.status == 200) callback(result.data)
        })
      .catch(error => {
        console.log(error)
      }) 
}

function PostJson(url, data, callback){
    axios.
    post(url, data, {
        'Content-Type': 'application/json',
    })
    .then(result => {
        if (result.status == (200 || 201)) callback(result.data)
    })
      .catch(error => {
        console.log(error)
      }) 
}

export { 
    GetJson,
    PostJson 
}