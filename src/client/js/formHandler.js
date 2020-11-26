import { checkForName } from './nameChecker';

const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault()


    // check what text was put into the form field
    let formText = document.getElementById('name').value
    checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test', {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({formText})
    })

    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.polarity
        console.log(res);
    })
}

export { handleSubmit }