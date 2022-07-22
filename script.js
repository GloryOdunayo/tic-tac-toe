let initialValue = "X"
let s1 = parseInt(score1.innerText);
let s2 = parseInt(score2.innerText)

const saveName = () =>{
    let firstPlayer = player1.value;
    let secondPlayer = player2.value;
    // let regexForPhone = /^[\w]{3,5}$/
    if(player1.value == ""  || player2.value == ""){
        check.innerText = "Please enter the name of the participants"
        player1.className = "form-control border border-2 border-danger"
        player2.className = "form-control border border-2 border-danger"
        return;
    } else 
    if(player1.value = ""){
        player1.className = "form-control border border-2 border-danger"
        return;
    } else if(player2.value = ""){
        player2.className = "form-control border border-2 border-danger"
        return;
    } else {
        name1.innerText = firstPlayer;
        name2.innerText = secondPlayer;
        // img.style.display = "none";
        player1 = ""
        player2 = ""
        check.innerText = ""

    }
}
const test = (e) => {
    let firstPlayer = player1.value;
    let secondPlayer = player2.value;
    let songWin = new Audio ("audio/mixkit-ending-show-audience-clapping-478.wav")
    if(firstPlayer != "" && secondPlayer != ""){
        player1.className = "form-control border border-2 border-danger"
        player2.className = "form-control border border-2 border-danger"
        if (initialValue == "X" && e.target.innerText == "") {
            e.target.innerText = "X"
            initialValue = "O"
            if ((one1.innerText === "X" && one2.innerText === "X" && one3.innerText === "X")||(two1.innerText === "X" && two2.innerText === "X" && two3.innerText === "X")||(three1.innerText === "X" && three2.innerText === "X" && three3.innerText === "X") || (one1.innerText === "X" && two2.innerText ==="X" && three3.innerText === "X")||(one3.innerText === "X" && two2.innerText === "X" && three1.innerText === "X")||(one1.innerText === "X" && two1.innerText === "X" && three1.innerText=== "X")||(one2.innerText === "X" && two2.innerText === "X" && three2.innerText==="X")||(one3.innerText === "X" && two3.innerText === "X" && three3.innerTex==="X")){
                initialValue = ""
                board.innerText = name1.innerText + " win this round 😀"
                songWin.play()
                s1 = s1+1;
                score1.innerText = s1;
                setTimeout(cont, 7000);
                // cont();
                initialValue = "O"
                return;
            } else if(one1.innerText != "" && one2.innerText != "" && one3.innerText != "" && two1.innerText !="" && two2.innerText != "" && two3.innerText != "" && three1.innerText != "" && three2.innerText != "" && three3.innerText !=""){
                board.innerText = "Stalemate"
                setTimeout(cont, 3000);
                // cont()
                return;
            }
        } else if (initialValue == "O" && e.target.innerText == ""){
            e.target.innerText = "O"
            initialValue = "X";
            if ((one1.innerText === "O" && one2.innerText === "O" && one3.innerText === "O")||(two1.innerText === "O" && two2.innerText === "O" && two3.innerText === "O")||(three1.innerText === "O" && three2.innerText === "O" && three3.innerText === "O") || (one1.innerText === "O" && two2.innerText ==="O" && three3.innerText === "O")||(one3.innerText === "O" && two2.innerText === "O" && three1.innerText === "O")||(one1.innerText === "O" && two1.innerText === "O" && three1.innerText=== "O")||(one2.innerText === "O" && two2.innerText === "O" && three2.innerText==="O")||(one3.innerText === "O" && two3.innerText === "O" && three3.innerTex==="O")){
                initialValue = ""
                board.innerText = name2.innerText + " win this round 😀"
                songWin.play()
                s2= s2+1;
                score2.innerText = s2
                setTimeout(cont, 7000);
                // cont();
                initialValue = "X"
                return;
            }else if(one1.innerText != "" && one2.innerText != "" && one3.innerText != "" && two1.innerText !="" && two2.innerText != "" && two3.innerText != "" && three1.innerText != "" && three2.innerText != "" && three3.innerText !=""){
                board.innerText = "Stalemate"
                setTimeout(cont, 3000);
                // cont()
            }
        }
    }
    else{
        check.innerText = "Sorry, You can't play without entering your name"
        return;
    }
} 

const cont = () => {
    initialValue = "X";
    board.innerText = "";
    one1.innerText = "";
    one2.innerText = "";
    one3.innerText = "";
    two1.innerText = "";
    two2.innerText = "";
    two3.innerText = "";
    three1.innerText = "";
    three2.innerText = "";
    three3.innerText = "";
}
 
const restart = () => {
    location.reload()
}
