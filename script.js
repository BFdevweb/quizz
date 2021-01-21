

// DÉBUT de la FONCTION POUR DÉGRISER LE BOUTON LORSQUE "TOUTES" MES CASES SONT COCHÉES !
document.addEventListener('DOMContentLoaded', function() {
    
    var bouton = document.querySelector("button");
    var qX = false;
    var q0 = false;
    var q1 = false;
    var q2 = false;
    var q3 = false;


    function verifquestionnaire(){
      if (qX === true && q0 === true && q1 === true && q2 === true && q3 === true) {
        bouton.disabled = false;
      }
      else {
        bouton.disabled = true;
      }
    }
    
    // QUESTION 0
    var case0a = document.getElementById("answerQ0a");
    var case0b = document.getElementById("answerQ0b");
    var case0c = document.getElementById("answerQ0c");

    case0a.addEventListener("click", function() {
        qX = true;
        verifquestionnaire();
    }); 
    case0b.addEventListener("click", function() {
        qX = true;
        verifquestionnaire();
    });  
    case0c.addEventListener("click", function() {
        qX = true;
        verifquestionnaire();
    });

    // QUESTION 1
    var case1a = document.getElementById("answerQ1a");
    var case1b = document.getElementById("answerQ1b");
    var case1c = document.getElementById("answerQ1c");

    case1a.addEventListener("click", function() {
        q0 = true;
        verifquestionnaire();
    }); 
    case1b.addEventListener("click", function() {
        q0 = true;
        verifquestionnaire();
    });  
    case1c.addEventListener("click", function() {
        q0 = true;
        verifquestionnaire();
    });

    // QUESTION 2
    var case2a = document.getElementById("answerQ2a");
    var case2b = document.getElementById("answerQ2b");
    var case2c = document.getElementById("answerQ2c");

    case2a.addEventListener("click", function() {
        q1 = true;
        verifquestionnaire();
    }); 
    case2b.addEventListener("click", function() {
        q1 = true;
        verifquestionnaire();
    });  
    case2c.addEventListener("click", function() {
        q1 = true;
        verifquestionnaire();
    });

    // QUESTION 3
    var case3a = document.getElementById("answerQ3a");
    var case3b = document.getElementById("answerQ3b");
    var case3c = document.getElementById("answerQ3c");
    var case3d = document.getElementById("answerQ3d");

    case3a.addEventListener("click", function() {
        q2 = true;
        verifquestionnaire();
    }); 
    case3b.addEventListener("click", function() {
        q2 = true;
        verifquestionnaire();
    });  
    case3c.addEventListener("click", function() {
        q2 = true;
        verifquestionnaire();
    });
    case3d.addEventListener("click", function() {
        q2 = true;
        verifquestionnaire();
    }); 

    // QUESTION 4
    var case4a = document.getElementById("answerQ4a");
    var case4b = document.getElementById("answerQ4b");
    var case4c = document.getElementById("answerQ4c");

    case4a.addEventListener("click", function() {
        q3 = true;
        verifquestionnaire();
    }); 
    case4b.addEventListener("click", function() {
        q3 = true;
        verifquestionnaire();
    });  
    case4c.addEventListener("click", function() {
        q3 = true;
        verifquestionnaire();
    });

});
// FIN de la FONCTION POUR DÉGRISER LE BOUTON LORSQUE "TOUTES" MES CASES SONT COCHÉES !



// AFFICHER les Bonnes Réponses en vert/Mauvaises Réponses en rouge et barré ET le score

document.querySelector("#verifQCM").addEventListener("click", function(){
    verifAnswers()
});

function verifAnswers(){
    var value0 = document.qcm.reponseQ0.value;
    var value1 = document.qcm.reponseQ1.value;
    var value2 = document.qcm.reponseQ2.value;
    var value3 = document.qcm.reponseQ3.value;
    var value4 = document.qcm.reponseQ4.value;


    //remonter en haut de page
    document.querySelector("header").scrollIntoView(true);

    // en dessous de la question on affiche un complément d'information
    var newResult0 = document.createElement("p");
    var Result0 = document.querySelector("#result0");
    Result0.appendChild(newResult0);
    newResult0.innerHTML = "Xavier Niel a commencé à faire fortune avec le Minitel rose, un service de messagerie érotique qui lui a permis de devenir millionnaire";

    var newResult1 = document.createElement("p");
    var Result1 = document.querySelector("#result1");
    Result1.appendChild(newResult1);
    newResult1.innerHTML = "La bonne réponse était bien : L'eau bout à une température plus basse à Denver qu'à Los Angeles.";

    var newResult2 = document.createElement("p");
    var Result2 = document.querySelector("#result2");
    Result2.appendChild(newResult2);
    newResult2.innerHTML = "Dans la ville de York, il est légal de tuer un Ecossais dans l'enceinte de la vieille ville, à condition que celui-ci porte un arc et des flèches.";

    var newResult3 = document.createElement("p");
    var Result3 = document.querySelector("#result3");
    Result3.appendChild(newResult3);
    newResult3.innerHTML = "Le World Wide Web Consortium (W3C) est une communauté internationale qui développe des normes ouvertes pour assurer la croissance à long terme du Web.";

    var newResult4 = document.createElement("p");
    var Result4 = document.querySelector("#result4");
    Result4.appendChild(newResult4);
    newResult4.innerHTML = "Marty et Dr. Emmett voyagent dans le temps lorsque leur DeLorean atteint 88 mph (141 km/h)";

    // affichage du score
    var score = 0;
    var scoreTotal = document.querySelector("#score");
    
// QUESTION 0
if (value0 == 1) {
    var newElt0a = document.createElement("p");
    var elt0a = document.querySelector(".faux0a");
    elt0a.appendChild(newElt0a);
    newElt0a.innerHTML = "FAUX : réponse C";
     
    var red0a = document.querySelector(".label0a");
    red0a.style.backgroundColor = "#c0392b";
    red0a.style.textDecoration = "line-through";
    var span0a = document.querySelector(".label0a > span");
    span0a.style.backgroundColor = "#c0392b";
} 
else if (value0 == 2) {
    var newElt0b = document.createElement("p");
    var elt0b = document.querySelector(".faux0b");
    elt0b.appendChild(newElt0b);
    newElt0b.innerHTML = "FAUX : réponse C";
     
    var red0b = document.querySelector(".label0b");
    red0b.style.backgroundColor = "#c0392b";
    red0b.style.textDecoration = "line-through";
    var span0b = document.querySelector(".label0b > span");
    span0b.style.backgroundColor = "#c0392b";
} 
else {
    var newElt0c = document.createElement("p");
    var elt0c = document.querySelector(".vrai0c");
    elt0c.appendChild(newElt0c);
    newElt0c.innerHTML = "VRAI";

    var green0c = document.querySelector(".label0c");
    green0c.style.backgroundColor = "#27ae60";
    var span0c = document.querySelector(".label0c > span");
    span0c.style.backgroundColor = "#27ae60";
    score++;
}

// QUESTION 1
if (value1 == 1) {
    //création du texte
    var newElt1a = document.createElement("p");
    var elt1a = document.querySelector(".vrai1a");
    elt1a.appendChild(newElt1a);
    newElt1a.innerHTML = "VRAI";
    //BACKGROUND-COLOR VERT sur le SPAN et le TEXTE, incrément score
    var green1a = document.querySelector(".label1a");
    green1a.style.backgroundColor = "#27ae60";
    var span1a = document.querySelector(".label1a > span");
    span1a.style.backgroundColor = "#27ae60";
    score++;
} 
else if (value1 == 2) {
    var newElt1b = document.createElement("p");
    var elt1b = document.querySelector(".faux1b");
    elt1b.appendChild(newElt1b);
    newElt1b.innerHTML = "FAUX : réponse A";
 
    var red1b = document.querySelector(".label1b");
    red1b.style.backgroundColor = "#c0392b";
    red1b.style.textDecoration = "line-through";
    var span1b = document.querySelector(".label1b > span");
    span1b.style.backgroundColor = "#c0392b";
} 
else {
    var newElt1c = document.createElement("p");
    var elt1c = document.querySelector(".faux1c");
    elt1c.appendChild(newElt1c);
    newElt1c.innerHTML = "FAUX : réponse A";

    var red1c = document.querySelector(".label1c");
    red1c.style.backgroundColor = "#c0392b";
    red1c.style.textDecoration = "line-through";
    var span1c = document.querySelector(".label1c > span");
    span1c.style.backgroundColor = "#c0392b";
}

// QUESTION 2
if (value2 == 1) {
    var newElt2a = document.createElement("p");
    var elt2a = document.querySelector(".vrai2a");
    elt2a.appendChild(newElt2a);
    newElt2a.innerHTML = "VRAI";

    var green2a = document.querySelector(".label2a");
    green2a.style.backgroundColor = "#27ae60";
    var span2a = document.querySelector(".label2a > span");
    span2a.style.backgroundColor = "#27ae60";
    score++;
} 
else if (value2 == 2){
    var newElt2b = document.createElement("p");
    var elt2b = document.querySelector(".faux2b");
    elt2b.appendChild(newElt2b);
    newElt2b.innerHTML = "FAUX : réponse A";

    var red2b = document.querySelector(".label2b");
    red2b.style.backgroundColor = "#c0392b";
    red2b.style.textDecoration = "line-through";
    var span2b = document.querySelector(".label2b > span");
    span2b.style.backgroundColor = "#c0392b";
} 
else {
    var newElt2c = document.createElement("p");
    var elt2c = document.querySelector(".faux2c");
    elt2c.appendChild(newElt2c);
    newElt2c.innerHTML = "FAUX : réponse A";  

    var red2c = document.querySelector(".label2c");
    red2c.style.backgroundColor = "#c0392b";
    red2c.style.textDecoration = "line-through";
    var span2c = document.querySelector(".label2c > span");
    span2c.style.backgroundColor = "#c0392b";
}

// QUESTION 3
if (value3 == 3) {
    var newElt3c = document.createElement("p");
    var elt3c = document.querySelector(".vrai3c");
    elt3c.appendChild(newElt3c);
    newElt3c.innerHTML = "VRAI";

    var green3c = document.querySelector(".label3c");
    green3c.style.backgroundColor = "#27ae60";
    var span3c = document.querySelector(".label3c > span");
    span3c.style.backgroundColor = "#27ae60";
    score++;
} 
else if (value3 == 2){
    var newElt3b = document.createElement("p");
    var elt3b = document.querySelector(".faux3b");
    elt3b.appendChild(newElt3b);
    newElt3b.innerHTML = "FAUX : réponse C";

    var red3b = document.querySelector(".label3b");
    red3b.style.backgroundColor = "#c0392b";
    red3b.style.textDecoration = "line-through";
    var span3b = document.querySelector(".label3b > span");
    span3b.style.backgroundColor = "#c0392b";
} 
else if (value3 == 4){
    var newElt3d = document.createElement("p");
    var elt3d = document.querySelector(".faux3d");
    elt3d.appendChild(newElt3d);
    newElt3d.innerHTML = "FAUX : réponse C";

    var red3d = document.querySelector(".label3d");
    red3d.style.backgroundColor = "#c0392b";
    red3d.style.textDecoration = "line-through";
    var span3d = document.querySelector(".label3d > span");
    span3d.style.backgroundColor = "#c0392b";
} 
else {
    var newElt3a = document.createElement("p");
    var elt3a = document.querySelector(".faux3a");
    elt3a.appendChild(newElt3a);
    newElt3a.innerHTML = "FAUX : réponse C";  

    var red3a = document.querySelector(".label3a");
    red3a.style.backgroundColor = "#c0392b";
    red3a.style.textDecoration = "line-through";
    var span3a = document.querySelector(".label3a > span");
    span3a.style.backgroundColor = "#c0392b";
}

// QUESTION 4
if (value4 == 2) {
    //création du texte
    var newElt4b = document.createElement("p");
    var elt4b = document.querySelector(".vrai4b");
    elt4b.appendChild(newElt4b);
    newElt4b.innerHTML = "VRAI";
    //BACKGROUND-COLOR VERT sur le SPAN et le TEXTE, incrément score
    var green4b = document.querySelector(".label4b");
    green4b.style.backgroundColor = "#27ae60";
    var span4b = document.querySelector(".label4b > span");
    span4b.style.backgroundColor = "#27ae60";
    score++;
} 
else if (value4 == 1) {
    var newElt4a = document.createElement("p");
    var elt4a = document.querySelector(".faux4a");
    elt4a.appendChild(newElt4a);
    newElt4a.innerHTML = "FAUX : réponse B";
 
    var red4a = document.querySelector(".label4a");
    red4a.style.backgroundColor = "#c0392b";
    red4a.style.textDecoration = "line-through";
    var span4a = document.querySelector(".label4a > span");
    span4a.style.backgroundColor = "#c0392b";
} 
else {
    var newElt4c = document.createElement("p");
    var elt4c = document.querySelector(".faux4c");
    elt4c.appendChild(newElt4c);
    newElt4c.innerHTML = "FAUX : réponse B";

    var red4c = document.querySelector(".label4c");
    red4c.style.backgroundColor = "#c0392b";
    red4c.style.textDecoration = "line-through";
    var span4c = document.querySelector(".label4c > span");
    span4c.style.backgroundColor = "#c0392b";
}

scoreTotal.textContent = "Votre score est : "+score+"/5";

var btnReset = document.getElementById('reset');

btnReset.addEventListener('click', function() {
  location.reload();
}, false);

}

