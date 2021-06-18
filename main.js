const song = document.querySelector("#song")
const icon = document.querySelector("#icon")

icon.onclick = () => {
    if (song.paused) {
        song.play();
        icon.classList.add('fa-pause-circle');
        icon.classList.add('active');
        icon.classList.remove('fa-play-circle');
    } else {
        song.pause();
        icon.classList.add('fa-play-circle');
        icon.classList.remove('fa-pause-circle');
        icon.classList.add('active');
    }
}