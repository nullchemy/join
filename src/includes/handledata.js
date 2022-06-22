import axios from 'axios'

export const sendData = (endpoint, data) => {
    data = JSON.stringify(data);
    let config = {
        method: 'post',
        url: endpoint,
        headers: {
        'Content-Type': 'application/json'
        },
        data : data
    };
    
    axios(config)
    .then((response) => {
        if(response.data.msg!==""){
            return response.data.msg
        }
        if(response.data.state==="succ"){
            setTimeout(() => {
                return {msg: "Redirecting ...", status: "succ", state: "redirect"}
            }, 1000);
        }
    })
    .catch((error) => {
        console.log(error);
        return {msg: "something wrong happened", status: "err", state: "network Err"}
    });
}