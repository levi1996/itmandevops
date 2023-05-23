const fetch = require("node-fetch");

it("Should get a login token",async()=>{

    let token = "";
    const options = {
        method:"POST",
        headers:{
            "content-Type":"application/json"
        },
        body:JSON.stringify({
            "userName":"priestysl@gmail.com",
            "password":"Wallbouncing96@"
        })
    }
    
    const response = await fetch('https://dev.stedi.me/login',options);

    token = await response.text();
    console.log("Token"+token);
    const status = response.status;


    expect(status).toBe(200);
    expect (token.length).toBe(36);


})