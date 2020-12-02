function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value
    Client.checkerUrl(formText)

    console.log("::: Form has been Submitted :::")
     fetch('./article')
     .then(res => res.json())
     .then(function(res) {
         document.getElementById('results').innerHTML = res.message
    })
    let reqBody = {
        text: formText
    };

    fetch('/article', {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.polarity
        console.log(res);
        alert(dataText);
    })
}

export { handleSubmit }
