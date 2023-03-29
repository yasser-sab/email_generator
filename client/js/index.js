let input;
let text = document.querySelector("#text");
let button = document.querySelector('#submit-button-newsletter');

button.addEventListener('click',(e)=>{
    e.preventDefault();

    input =  document.querySelector('#email_newsletter');





    fetch("http://localhost:5000",{
        method:"POST",
        body:JSON.stringify({value:input.value}),
        headers:{
            "Content-Type": "application/json",
        }
    })
    .then((response) => response.json())
    .then((data) =>{
        text.value=data.message;
    });

    // fetch('http://localhost:5000/',{
    //     method:"POST",
    //     body:json.stringify("test"),
    //     headers:{
    //         "Content-Type": "application/json",
    //     }
    // }).then(res=>{
    //     return res.json();
    // }).then(res=>{
    //     console.log(res);
    // })

})
