/* Die Satzbau-Maschine | Arrays */





// output(getSentenceArr2(["Ich","bin"]));
// output(getSentenceArr2(["Ich","bin","Max","Mütze"]));
// function getSentenceArr2(arr) {
//     const gap = " ";
//     const punct = ".";
//     let str = "";
    

//     for (let i = 0; i < arr.length; i++){
//         str += arr[i] + gap;
//         end = arr[i] + "";          // erster Versuch, aber hier wird das letzte Wort doppelt angezeigt
//     }
    
//     return str + end + punct;
// }


output(getSentenceArr2(["Ich","bin"]));
output(getSentenceArr2(["Ich","bin","Max","Mütze"]));
function getSentenceArr2(arr) {
    const gap = " ";
    const punct = ".";
    let str = "";
    

    for (let i = 0; i < arr.length - 1; i++) {
        str += arr[i] + gap;
    }    
    for (let j = 0; j < arr.length; j++) { 
    end = arr[j] + "";          
    }
    
    return str + end + punct;
}



/*** 2b. Funktionalität mit Array 2 ***/

// output(getSentenceArr2(["Ich","bin"]));
// output(getSentenceArr2(["Ich","bin","Max","Mütze"]));
// function getSentenceArr2(arr) {
//     const gap = " ";
//     const punct = ".";
//     let str = "";
    

//     for (let i = 0; i < arr.length; i++){
//         str += arr[i] + gap;
//     }
    
//     return str + punct;
// }



/** Theorie: Schleifen **/

// For -Schleife als Wiederholungs-Struktur 

// for (let i = 1; i <= 10; i++) {
//     output(i);
// }


// For-Schleife für Array-Index (Iteration)

// let arr = ["Ich","bin", "der", "coole", "Max", "Mütze"]
// for (let i = 0; i < arr.length; i++) {
//     // output(i);
//     output(arr[i]);
// }


// FOR-Schleife 

// let a = 0;  // Anfangswert
// for (let i = 0; i < 5; i++){
//     output("ausgabe aus der loop: " + a);
//     a += 1; // a = a + 1
// }


// let str = "";   // Anfangswert
// let gap = " ";
// const addStr = "Test";
// for (let i = 0; i < 5; i++){
//     str += addStr + gap;
// }
// output(str);


/*** 2a. Funktionalität mit Array 1 ***/

// output(getSentence("Ich","bin","Max","Mütze"));
function getSentence(arr) {
    const gap = " ";
    const punct = "."
    const str = arr[0] + gap + 
                arr[1] + gap +
                arr[2] + gap +
                arr[3] +
                punct;
    return str; 
}
    // --> Transformation  semantisches Problem --> numerisches Problem



/** Theorie: Array **/

// let arr;
// arr = new Array();  // Konstuktor
// arr = [];           // Literal
// arr = [2,4,7,12];
// arr = [true,false];
// arr = ["Ich","bin","Max","Mütze"];


// output(arr);
// output(arr.length);
// output(arr[0]);    // Index, beginnt IMMER mit 0 !!!
// output(arr[3]);
// output(arr[arr.length-1]);



/*** 1. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."

// Modul: Satz-String zusammensetzen

// output(getSentence("Ich","bin","Max","Mütze"));
function getSentence(word1,word2,word3,word4) {
    const gap = " ";
    const punct = "."
    const str = word1 + gap + 
                word2 + gap +
                word3 + gap +
                word4 +
                punct;
    return str; 
}


// Modul: Ausgabe in Konsole : Test

// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


