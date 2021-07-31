// Add your code here
function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "Post",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
        .then(response => response.json())
        .then(data => {
            appDom(data)



        })
        .catch(err => appError(err))
}
function appDom(object) {
    const body = document.querySelector("body")
    body.append(object.id);
}
function appError(error){
    const body = document.querySelector("body")
    body.append(error)
}
