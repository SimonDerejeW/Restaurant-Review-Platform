
function readMore(): void {
    let moreText: HTMLElement | null = document.getElementById("moreText");
    let lessText: HTMLElement | null = document.getElementById("lessText");
    let dots: HTMLElement | null = document.getElementById("dots");
    let readMore: HTMLElement | null = document.getElementById("readMore");

    if (dots && moreText && readMore && dots.style.display === "none") {
        dots.style.display = "inline";
        readMore.innerHTML = "Read More";
        moreText.style.display = "none";
    } else if (dots && moreText && readMore) {
        dots.style.display = "none";
        readMore.innerHTML = "Read Less";
        moreText.style.display = "inline";
    }
}