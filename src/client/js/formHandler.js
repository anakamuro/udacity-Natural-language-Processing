const error = document.getElementById('error');
const polarity = document.getElementById('polarity');
const polConfidence = document.getElementById('pol-confidence');
const subjectivity = document.getElementById('subjectivity');
const subConfidence = document.getElementById('sub-confidence');

function handleSubmit(event) {
    event.preventDefault()

    let formUrl = document.getElementById('url').value;

    console.log("::: Form Submitted :::")

    if (Client.validateUrl(formUrl)) {
        
        error.style.visibility = 'hidden';

        polarity.innerHTML = "";
        polConfidence.innerHTML = "";
        subjectivity.innerHTML = "";
        subConfidence.innerHTML = "";

        postData(formUrl)
            .then(function(data) {
                updateUI(data);
            })
    }
}

const postData = async(url = '') => {

    const response = await fetch('http://localhost:8080/test', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "url": url }),       
    });

    try {
        const newData = await response.json();
        console.log(newData)
        return newData
    } catch (error) {
        console.log("error", error);
    }
}


function updateUI(data) {
    console.log(data)
    polarity.innerHTML = `Polarity: ${data.polarity}`;
    polConfidence.innerHTML = `Polarity Confidence: ${data.polarity_confidence}`;
    subjectivity.innerHTML = `Subjectivity: ${data.subjectivity}`;
    subConfidence.innerHTML = `Subjectivity Confidence: ${data.subjectivity_confidence}`;
}

export { handleSubmit }
