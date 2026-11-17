
function slideCharacters(trackId, direction) {
    const track = document.getElementById(trackId);

    if (!track) return;

    const card = track.querySelector(".character-slide");

    if (!card) return;

    const gap = 24;
    const distance = card.offsetWidth + gap;

    track.scrollBy({
        left: distance * direction,
        behavior: "smooth"
    });
}
