window.onload = () =>{
    let buttons = document.getElementsByTagName("button");
    var input = document.getElementById("screen")
    for (let button of buttons) {
        button.addEventListener("click",buttonClicked);
    };

    function clear(){
        input.value = "";
    }

    function floatNumber(){
        if(input.value==="")
            return;
        if(!input.value.includes("."))
            printOnScren(".")
    }

    function calculate(){
        if (input.value==="")
            return
        let calc = eval(input.value)
        input.value = calc
    }

    function deleteOne(){
        let value = input.value;
        if (value==="")
            return;
        input.value = value.substring(0,value.length-1)
    }

    function printOnScren(value){
        input.value += value
    }
    
    function buttonClicked(e){
        let buttonValue = e.target.innerHTML;
        switch (buttonValue){
            case "x":
                    deleteOne();
                    break;
            case "AC":
                    clear();
                    break;
            case "=": 
                    calculate();
                    break;
            case ".":
                    floatNumber();
                    break;
            default: 
                    printOnScren(buttonValue);
                    break;
        }

    }
}

