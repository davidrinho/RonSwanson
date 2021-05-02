
var bgArray = [
    "url('https://images.unsplash.com/photo-1509647648544-a3e09b751ad6?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
    "url('https://images.unsplash.com/photo-1606744666360-2f22c8b4a45b?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
    "url('https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80')",
    "url('https://images.unsplash.com/photo-1619408506946-a3caaf4e4d35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=759&q=80')",
    "url('https://images.unsplash.com/photo-1619340207451-b8dee65a7546?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
    "url('https://images.unsplash.com/photo-1619029073214-53881475044d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80')",
    "url('https://images.unsplash.com/photo-1580989760091-5853408c5997?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80')",
    "url('https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
    "url('https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
]



function randomBg() {
    var rand = Math.floor(Math.random() * bgArray.length);
    var bgDiv = document.getElementById("bgDiv");
    bgDiv.style.background=bgArray[rand];
    bgDiv.style.backgroundRepeat = "no-repeat";
    bgDiv.style.backgroundSize = "cover";
}


function randomQuote() {
    var quoteText = document.getElementById("quote");
    fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then(response => response.json())
    .then(data => {
        quoteText.innerText = data[0] + "\n- Ron Swanson";
    });
}

function random() {
    randomBg();
    randomQuote();
}