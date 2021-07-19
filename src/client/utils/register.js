

async function register(email,password,first_name,last_name,state,zipcode,address,phone,role,profile_picture) {

    try {
        

        let res = await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify(email,password,first_name,last_name,state,zipcode,address,phone,role,profile_picture),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        });
        
        let id = await res.json()
        return id
    } catch (err) {
        console.log(err)
    }



}

async function getUser(column, value) {
    
   
    try {
        
        let res = await fetch("/api/users/getUser", {
            method: "POST",
            body: JSON.stringify(column, value),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        });
        let user = await res.json()
        console.log(user)
        return user

    } catch (err) {
        
        console.log(err)
        return null
    }
}

async function resetPassword(password, id) {
    
   
    try {
        let res = await fetch("/api/users/forgot-password", {
            method: "PUT",
            body: JSON.stringify(password, id),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        });
        
        let userObj = await res.json()
        return userObj

    } catch (err) {
        console.log(err)
        
    }
}

export { register, getUser, resetPassword }