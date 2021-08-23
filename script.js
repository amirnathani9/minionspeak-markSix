var btnTranslator = document.querySelector("#translate-btn");
var inputTxt = document.querySelector("#input-txt");
var outputTxt = document.querySelector("#output-txt");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslatorURL(input) {
    return serverURL + "?" + "text=" +input
}

function errorHandler(error) {
    alert("Something went wrong.Plzz Try Later")
}

function clickEvent(){
    var txtInput = inputTxt.value;

    fetch(getTranslatorURL(txtInput))
        .then(response => response.json())
        .then(json => {
            var translatedOutput = json.contents.translator;
            outputTxt.innerTxt =translatedOutput
        })
    .catch(errorHandler)
}

btnTranslator.addEventListener("click",clickEvent)