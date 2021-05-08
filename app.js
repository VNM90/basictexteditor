const buttons = document.querySelectorAll("button");
textField.document.designMode = "On";

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        let selectedButton = buttons[i].getAttribute("data-button");
        textField.document.execCommand(selectedButton);
    })
};

document.querySelector("#loadFile").onchange = function () {
    let file = document.querySelector("#loadFile").files[0];
    let fileReader = new FileReader();
    fileReader.onload = function (el) {
        let text = el.target.result;
        window.frames["textField"].document.body.innerHTML = text;
    }
    fileReader.readAsText(file, "UTF-8");
};

function savefile() {
    let save = window.frames["textField"].document.body.innerHTML
    let textJson = new Blob([save], { type: "application/json" });
    let link = document.createElement("a");
    let fileName = prompt("Name of saving file:");

    if(fileName === "" || fileName === null){
        // pass 
    }
    else{
        link.href = window.URL.createObjectURL(textJson);
        link.download = fileName;
    }
    link.click();
};
