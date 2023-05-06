
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed sheraan',
        year: 2015,
    }
} 

const { song:anotherSong, songDuration:duration, details } = audioPlayer;
const { author } = details;


console.log('Author: ', author);
console.log('Song: ', anotherSong);
console.log('Song duration: ', duration);


const dbz: string[] = ['Goku','Vegetta',];
const [, ,c3 = 'Not found' ] = dbz
console.log(c3);




export {}