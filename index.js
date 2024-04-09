const images = Array.from(document.getElementsByClassName("project"));

function clearActiveImage() {
    images.forEach(function (image) {
        image.classList.remove("active");
    });
}

images.forEach(function (image, index) {
    image.addEventListener('mouseover', function () {
        clearActiveImage(index);
        images[index].classList.add("active");
    })
});
