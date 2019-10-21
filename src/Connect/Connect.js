import axios from 'axios';
//----------------------------------------------------------------------
class Connect {
//----------------------------------------------------------------------
    getData(url, callback) {
        let data= [];
        axios.get(url)
            .then(res => {
                console.log(res);
                data = res.data;
                callback(data);
            })
            
        }
}

export default Connect;