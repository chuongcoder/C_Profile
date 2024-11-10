var Typed = new Typed(".multiple-text", {
    strings: ["a Coder", "a UTEr", "a Student"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});
document.addEventListener("DOMContentLoaded", function () {
    // Truy cập thẻ audio
    var audio = document.getElementById("noelAudio");

    // Bắt đầu chơi nhạc khi trang web tải xong
    audio.play();
});
document.addEventListener("click", function () {
    var audio = document.getElementById("noelAudio");
    audio.play();
});
