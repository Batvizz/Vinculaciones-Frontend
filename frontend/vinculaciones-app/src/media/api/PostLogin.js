import Axios from 'axios';

const PostLogin = (data, redirect) => {
    
        console.log("POST LOGIN")
        // console.log(data)
        Axios.post('http://127.0.0.1:8000/api/login', {
            "email": data.email,
            "password": data.password
        })
        .then(response =>{
            console.log(response);
            localStorage.setItem('local-email', data.email);
            localStorage.setItem('local-token', response.data.token);
            return redirect("/")
        })
        .catch(function (error) {
            console.log(error);
            return false
        }) 
}

export default PostLogin;