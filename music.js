console.log('hi spotify');

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio(`songs/${songIndex}.mp3`);
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let gif2 = document.getElementById('gif2');
let songitems = Array.from(document.getElementsByClassName('songItem'));
// let songname = document.getElementById('songName');
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'));
let backward = document.getElementById('backward');
let forward = document.getElementById('forward');
let masterSongName = document.getElementById('masterSongName');


let songs = [
    {songName: "Let me love you...", filePath:"songs/0.mp3", coverPath: "covers/1.jpg"},
    {songName: "Desi Kalakar...", filePath:"songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Chakkwein Suit...", filePath:"songs/2.mp3", coverPath: "covers/1.png"},
    {songName: "Abhi toh party...", filePath:"songs/3.mp3", coverPath: "covers/1.jpg"},
    {songName: "Flawless backseat...", filePath:"songs/4.mp3", coverPath: "covers/5.jpg"},
    {songName: "Jaguar...", filePath:"songs/5.mp3", coverPath: "covers/3.jpg"},
    {songName: "Kede pind di...", filePath:"songs/6.mp3", coverPath: "covers/1.jpg"},
    {songName: "Mitran de boot...", filePath:"songs/7.mp3", coverPath: "covers/2.jpg"},
    {songName: "Pendu...", filePath:"songs/8.mp3", coverPath: "covers/1.jpg"},
    {songName: "Pepe...", filePath:"songs/9.mp3", coverPath: "covers/5.jpg"}
]

// audioElement.play();

// song name/cover/play button
songitems.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML = songs[i].songName;
})

// Handle play/pause button
masterPlay.addEventListener('click',()=>{
    // console.log('play clicked');
    if (audioElement.paused || audioElement.currentTime==0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        gif2.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        gif2.style.opacity = 0;
    }
})

// Progress bar
audioElement.addEventListener('timeupdate',()=>{
    // console.log('progress bar');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log('progress');
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100 ;
})

const makeAllPlays = ()=>{
    songItemPlay.forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}



songItemPlay.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e);
        makeAllPlays();
        let songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.play();
        gif.style.opacity = 1;
        gif2.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

//next/previous buttons
forward.addEventListener('click',()=>{
    if (songIndex >=9) {
        songIndex=0;
    }else{
        songIndex = songIndex + 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.play();
    gif.style.opacity = 1;
    gif2.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

backward.addEventListener('click',()=>{
    if (songIndex <=0) {
        songIndex=0;
    }else{
        songIndex = songIndex - 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})