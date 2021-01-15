import { notesToPlayInOrder } from "./music-to-play";

function playMusic() {
    const notes = notesToPlayInOrder;

    // TODO Play these notes one after the other at the pitch and rhythm given in each note

    var beats = [];
    var finalBeat;
    var loop = 0;

    // FOR LOOP TO GET THE NOTES
    for (let i = 0; i < notes.length; i++) {
        let a = notes[i].accidental
        beats.push((notes[i].pitch).concat((notes[i].octave).toString()).concat(notes[i].accidental))

    }

    //console.log(beats)

    // FOR LOOP TO FILTER ONLY THE UNIQUE NOTES & STORE IN FINAL ARRAY
    let finalArray = beats

    for (let i = 0; i < beats.length; i++) {
        //let d = beats[i]
        finalArray = finalArray.filter((element, i) => i === finalArray.indexOf(element))

    }

    //PLAY WITH UNIQUE NOTES

    //console.log(finalArray)

    //PLAY 0
    for (let i = 0; i < finalArray.length; i++) {
        finalBeat = finalArray[i]
        //console.log(finalBeat)
        play0(finalBeat)
    }
    //PLAY 1
    for (let i = 0; i < finalArray.length; i++) {
        finalBeat = finalArray[i]
        play1(finalBeat)
    }
    //PLAY 2
    for (let i = 0; i < finalArray.length; i++) {
        finalBeat = finalArray[i]
        play2(finalBeat)
    }
    //PLAY 3
    for (let i = 0; i < finalArray.length; i++) {
        finalBeat = finalArray[i]
        play3(finalBeat)
    }
    //PLAY 4
    for (let i = 0; i < finalArray.length; i++) {
        finalBeat = finalArray[i]
        play4(finalBeat)
    }
    //PLAY 0
    for (let i = 0; i < finalArray.length; i++) {
        finalBeat = finalArray[i]
        play0(finalBeat)
    }

}

function play0(note: string) {

    if (note === "D5") {
        let audio = document.getElementById(note) as HTMLAudioElement;
        audio.play();
        console.log("playing ==> D5");
        setTimeout(function () {
            let audio = document.getElementById(note) as HTMLAudioElement;
            audio.pause();
        }, 2000);
    }

}

function play1(note: string) {

    if (note === "D4") {
        let audio = document.getElementById(note) as HTMLAudioElement;
        audio.play();
        console.log("playing ==> D4");
        setTimeout(function () {
            let audio = document.getElementById(note) as HTMLAudioElement;
            audio.pause();
        }, 4000);
    }
    else if (note === "A5") {
        let audio = document.getElementById(note) as HTMLAudioElement;
        audio.play();
        console.log("playing ==> A5");
        setTimeout(function () {
            let audio = document.getElementById(note) as HTMLAudioElement;
            audio.pause();
        }, 5000);
    }

}

function play2(note: string) {

    if (note === "B4F") {
        let audio = document.getElementById(note) as HTMLAudioElement;
        audio.play();
        console.log("playing ==> B4F");
        setTimeout(function () {
            let audio = document.getElementById(note) as HTMLAudioElement;
            audio.pause();
        }, 2000);
    }

    else if (note === "B5F") {
        let audio = document.getElementById(note) as HTMLAudioElement;
        audio.play();
        console.log("playing ==> B5F");
        setTimeout(function () {
            let audio = document.getElementById(note) as HTMLAudioElement;
            audio.pause();
        }, 1000);
    }

    else if (note === "F5S") {
        let audio = document.getElementById(note) as HTMLAudioElement;
        audio.play();
        console.log("playing ==> F5S");
        setTimeout(function () {
            let audio = document.getElementById(note) as HTMLAudioElement;
            audio.pause();
        }, 1000);
    }
}

function play3(note: string) {

    if (note === "A4") {
        let audio = document.getElementById(note) as HTMLAudioElement;
        audio.play();
        console.log("playing ==> A4");
        setTimeout(function () {
            let audio = document.getElementById(note) as HTMLAudioElement;
            audio.pause();
        }, 2000);
    }

    else if (note === "F5") {
        let audio = document.getElementById(note) as HTMLAudioElement;
        audio.play();
        console.log("playing ==> F5");
        setTimeout(function () {
            let audio = document.getElementById(note) as HTMLAudioElement;
            audio.pause();
        }, 7000);
    }
}

function play4(note: string) {

    if (note === "C5") {
        let audio = document.getElementById(note) as HTMLAudioElement;
        audio.play();
        console.log("playing ==> C5");
        setTimeout(function () {
            let audio = document.getElementById(note) as HTMLAudioElement;
            audio.pause();
        }, 6000);
    }

}


document.getElementById('start-playing')?.addEventListener('click', playMusic);
