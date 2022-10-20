
function play() {
    let input = document.getElementById('tinput');
    let newInput = Array.from(input.value);
    const random =[]
    const predict = newInput;
    for(let i =0; i  < 6; i++ ){

        random[i] = Math.floor(Math.random() * 100);
     }
    
    const correctGuess =[];
    let correctIndex =0
    for(let value of predict){
        let numm = parseInt(value)
        if(random.includes(numm)){
            correctGuess[correctIndex] = value;
            correctIndex++
        }
    }

    if(correctGuess.length >=3){
        document.getElementById('result').innerHTML = "YOU WIN"
    }else{
        document.getElementById('result').innerHTML = "OTI LULE"
    }

    document.getElementById('random').innerHTML = random
    document.getElementById('avail-no').innerHTML = "<b>YOUR INPUT: " + correctGuess + "<b>" 
}

function valid(){
    let input = document.getElementById('tinput');
    let output = document.getElementById('result');
    output.innerHTML = input.value
    let display = document.getElementById('tinput').value;

    if (display.Array == 3 ){
        valid = input.value

    }else {
        valid = "invalid"
    }

    document.getElementById('result').innerHTML = valid;
}
