console.log("hello");

//Initialize the variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');
let songItemPlay =document.getElementsByClassName('songItemPlay');



//songs ka ek array 
let songs = [
    {songName: "Agar tum sath ho", filePath: "songs/1.mp3", coverPath: "imgs/cover1.jpg"},
    {songName: "Arabian Nights - beats", filePath: "songs/2.mp3", coverPath: "imgs/cover2.jpg"},
    {songName: "Sugar & Brownies", filePath: "songs/3.mp3", coverPath: "imgs/cover3.png"},
    {songName: "Kho gaye ham kaha", filePath: "songs/4.mp3", coverPath: "imgs/cover4.png"},
    {songName: "Excuses", filePath: "songs/5.mp3", coverPath: "imgs/cover5.png"},
    {songName: "Saiyyan", filePath: "songs/6.mp3", coverPath: "imgs/cover6.png"},
    {songName: "Suit Suit karda", filePath: "songs/7.mp3", coverPath: "imgs/cover7.png"},
    {songName: "Maa", filePath: "songs/8.mp3", coverPath: "imgs/cover8.jpg"},
    {songName: "Abusadamente - (3000beat)", filePath: "songs/9.mp3", coverPath: "imgs/cover9.png"},
    { songName: "We Rollin", filePath: "songs/10.mp3", coverPath: "imgs/cover10.jpg"}

];

songItems.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName').innerText = songs[i].songName;

});

// audioElement.play();


// handle play/ pause click 
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }

});



//listen to Events
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');

    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});




const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    });
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const makeAllOff = () => {
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element1) => {
//         audioElement.pause();
//         element1.classList.remove('fa-circle-play');
//         element1.classList.add('fa-circle-pause');

//     });
// };



Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // if (audioElement.paused || audioElement.currentTime <= 0) {
        makeAllPlays();
        // makeAllOff();


        // console.log(e.target);
        songIndex = parseInt(e.target.id);

        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');

        //    for song to play 
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;


    });
});




document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >=9){
        songIndex = 0;
    }

else{
    songIndex += 1;

}
audioElement.src = `songs/${songIndex}.mp3`;
audioElement.currentTime = 0;
audioElement.play();
// masterSongName.innerText = songs[songIndex].songName;
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');

});



document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <=0){
        songIndex = 0;
    }

else{
    songIndex -= 1;

}


audioElement.src = `songs/${songIndex}.mp3`;
audioElement.currentTime = 0;
audioElement.play();
// masterSongName.innerText = songs[songIndex].songName;
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');


});







//working on time

// songItemPlay.addEventListener('click', () => {

//     if (audioElement.paused || audioElement.currentTime <= 0) {
//         audioElement.play();
//         songItemPlay.classList.remove('fa-circle-play');
//         songItemPlay.classList.add('fa-circle-pause');
//         gif.style.opacity = 1;
//     }

//     else {
//         audioElement.pause();
//         songItemPlay.classList.remove('fa-circle-pause');
//         songItemPlay.classList.add('fa-circle-play');
//         gif.style.opacity = 0;
//     }

// });