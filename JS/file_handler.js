let file = document.getElementById("file");

let fileInput = '';
file.addEventListener('change', () => {
    event.preventDefault();
    let fileReader = new FileReader();
    fileReader.readAsText(file.files[0]);
    fileReader.onload = function () {
        fileInput = fileReader.result;
        document.getElementById("data-input").value = fileInput;
    }
});
