import { notesToPlayInOrder } from "./music-to-play";

function playMusic() {
    const notes = notesToPlayInOrder;

    // TODO Play these notes one after the other at the pitch and rhythm given in each note

    let beats = [];
    let b = ["A5", "A4", "G5", "D4"];
    let finalBeat;
    var loop = 0;

    // FOR LOOP TO ARRANGE THE NOTES
    for (let i = 0; i < notes.length; i++) {

        beats.push((notes[i].pitch).concat((notes[i].octave).toString()))

    }

    //console.log(beats)

    // FOR LOOP TO GET ONLY THE UNIQUE NOTES & STORE IN FINAL ARRAY
    let finalArray = beats

    for (let i = 0; i < beats.length; i++) {

        let d = beats[i]
        finalArray = finalArray.filter((element, i) => i === finalArray.indexOf(element))

    }

    //PLAY WITH UNIQUE NOTES
    // console.log(finalArray)
    for (let i = 0; i < finalArray.length; i++) {
        finalBeat = finalArray[i]
        // console.log(finalBeat)

        // let audio = document.getElementById(finalBeat) as HTMLAudioElement;
        // audio.play();

        //test = document.getElementById(finalArray[i]) as HTMLAudioElement;
    }

    //STATIC TEST CODE

    while (true) {
        for (let i = 0; i < b.length; i++) {

            let d = b[i]
            console.log(d)
            // play(d)
        }
        play(b[0])
        play(b[1])
        play(b[2])
        play(b[3])

        console.log("end of while")
    }

    // 1. Select the div element using the id property
    //const app = document.getElementsByClassName("audio-elements-holder");

}

function play(note: string) {

    console.log("Note, " + note);

    //FOR NOTE 1
    if (note === "A5") {
        let audio = document.getElementById(note) as HTMLAudioElement;
        audio.play();

        setTimeout(function () {
            let audio = document.getElementById(note) as HTMLAudioElement;
            audio.pause();
        }, 1000);
    }

    //FOR NOTE 2
    else if (note === "A4") {
        let audio = document.getElementById(note) as HTMLAudioElement;
        audio.play();

        setTimeout(function () {
            let audio = document.getElementById(note) as HTMLAudioElement;
            audio.pause();
        }, 3000);

    }

    //FOR NOTE 1
    else if (note === "G5") {
        let audio = document.getElementById(note) as HTMLAudioElement;
        audio.play();

        setTimeout(function () {
            let audio = document.getElementById(note) as HTMLAudioElement;
            audio.pause();
        }, 1000);
    }

    //FOR NOTE 1
    else if (note === "D4") {
        let audio = document.getElementById(note) as HTMLAudioElement;
        audio.play();

        setTimeout(function () {
            let audio = document.getElementById(note) as HTMLAudioElement;
            audio.pause();
        }, 500);
    }

    //FOR NOTE 1
    else if (note === "A5") {
        let audio = document.getElementById(note) as HTMLAudioElement;
        audio.play();

        setTimeout(function () {
            let audio = document.getElementById(note) as HTMLAudioElement;
            audio.pause();
        }, 1000);
    }

}

document.getElementById('start-playing')?.addEventListener('click', playMusic);
