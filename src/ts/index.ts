import { notesToPlayInOrder } from "./music-to-play";

function playMusic() {
    const notes = notesToPlayInOrder;

    // TODO Play these notes one after the other at the pitch and rhythm given in each note

    const beats = [];
    var finalBeat;
    var loop = 0;

    // FOR LOOP TO GET THE NOTES
    for (let i = 0; i < notes.length; i++) {
        let a = notes[i].accidental
        beats.push((notes[i].pitch).concat((notes[i].octave).toString()).concat(notes[i].accidental))

    }

    // PLAY THE NOTES
    console.log(beats.toString())
    for (let i = 0; i < beats.length; i++) {
        const audio = (document.getElementById(beats[i].toString()) as HTMLAudioElement).play();
    }

}

document.getElementById('start-playing')?.addEventListener('click', playMusic);
