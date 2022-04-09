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
        /*
        
        */
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
            case "*":
                clear();
                printOnScren(buttonValue);
                break;
            case "/":
                    clear();
                    printOnScren(buttonValue);
                    break;
            case "-": 
                    clear();
                    printOnScren(buttonValue);
                    break;
            case "+": 
                    clear();
                    printOnScren(buttonValue);
                    break;
            case "%": 
                    clear();
                    printOnScren(buttonValue);
                    break;
            case "=": 
                    clear();
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

