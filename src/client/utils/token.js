
const AUTH_TOKEN_KEY = 'authtoken';
let authToken = '';

function setAuthToken(token) {
    authToken = `Bearer ${token}`;
    if (localStorage) {
        localStorage.setItem(AUTH_TOKEN_KEY, authToken);
    }

    console.log(authToken);
}

 function clearAuthToken() {

    try {
        authToken = '';
        if (localStorage) {
            localStorage.removeItem(AUTH_TOKEN_KEY);
        }
    } catch (error) {
        console.log(error)
    }


}

 function populateAuthToken() {

    try {
        if (localStorage) {
            let token = localStorage.getItem(AUTH_TOKEN_KEY);
            if (token && token !== null) {
                authToken = token;
                console.log(authToken)
                return authToken;
            }
            console.log('I cant find your token')
            return null
        }

    } catch (error) {
        return error
    }


}

async function getUser() {

}



export {
    setAuthToken,
    populateAuthToken,
    clearAuthToken
};