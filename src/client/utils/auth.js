import * as token from "./token";

let loggedIn = false;

async function isLoggedIn() {
  return loggedIn;
}

async function checkLogin() {

  try {
    if (loggedIn) {
      return true;
    } else {
      let usertoken = await token.populateAuthToken();
      console.log(usertoken)
      try {
        let user = await getUser(usertoken.split(' ')[1]);
        loggedIn = true;
        console.log(user);
        return true;
      } catch (e) {
        return false;
      }
    }
  } catch (error) {
    console.log(error)
  }
}

async function login(email, password) {

  let response = await fetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
  if (response.ok) {
    let res = await response.json();
    console.log(res)
    token.setAuthToken(res);
    loggedIn = true;
    return res;
  } else if (response.status === 401) {
    let json = await response;
    console.log(json)
    return null;
  }
}


async function logout() {
  token.clearAuthToken();
  loggedIn = false;
  return null
}

async function getUser(token) {

  try {
    let res = await fetch("/api/users/me", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      })
    });

    let user = await res.json()
    console.log(user);
    return user
  } catch (err) {
    console.log(err)
  }


}

export { isLoggedIn, checkLogin, login, logout, getUser };
