export const login = (email, password, setUser, setLogin) => {
    const url = "https://calm-lowlands-63544.herokuapp.com/api/login"
    const request = new Request(url, {
        method: "post",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })

    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json()
            } else {
                console.log("Could not login")
            }
        })
        .then(json => {
            console.log(json)
            setUser(json.currentUser)
            setLogin(true)
        })
        .catch(error => {
            console.log(error)
        })
}