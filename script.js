function translateText() {

    let input = document.getElementById("inputText").value.toLowerCase().trim();
    let mode = document.getElementById("mode").value;
    let output = document.getElementById("outputText");

    if (input === "") {
        output.value = "Please enter some text.";
        return;
    }

    if (mode === "en-te") {
        output.value = enToTe[input] || "Word not found in dictionary";
    } 
    else {
        output.value = teToEn[input] || "పదం కనబడలేదు";
    }
}
