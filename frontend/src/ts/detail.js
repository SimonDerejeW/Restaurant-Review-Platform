function readMore() {
    var moreText = document.getElementById("moreText");
    var lessText = document.getElementById("lessText");
    var dots = document.getElementById("dots");
    var readMore = document.getElementById("readMore");
    if (dots && moreText && readMore && dots.style.display === "none") {
        dots.style.display = "inline";
        readMore.innerHTML = "Read More";
        moreText.style.display = "none";
    }
    else if (dots && moreText && readMore) {
        dots.style.display = "none";
        readMore.innerHTML = "Read Less";
        moreText.style.display = "inline";
    }
}
