let select = document.getElementById("select");

select.addEventListener('change', function () {
    let selectInput = '';
    let arrayOfTrees = [];
    let numberOfTrees;

    switch (this.value) {
        case "sparse":
            numberOfTrees = 5;
            break;
        case "moderate":
            numberOfTrees = 15;
            break;
        case "dense":
            numberOfTrees = 30;
            break;
    }

    for (let i = 0; i < numberOfTrees; i++) {
        let x = Math.floor(Math.random() * 21);
        let y = Math.floor(Math.random() * 9) + 1;
        arrayOfTrees.push([x, y]);
    }

    selectInput = JSON.stringify(arrayOfTrees);
    document.getElementById("data-input").value = selectInput;
    
    if (this.value === "") {
        this.style.color = "gray";
    } else {
        this.style.color = "black";
    }
});
