// Image array for the slider
const image_arr = [
    { src: "https://picsum.photos/id/237/700/400", alt: "image1" },
    { src: "https://picsum.photos/id/220/700/400", alt: "image2" },
    { src: "https://picsum.photos/id/221/700/400", alt: "image3" },
    { src: "https://picsum.photos/id/223/700/400", alt: "image4" },
    { src: "https://picsum.photos/id/233/700/400", alt: "image5" }
];

const images_slider = document.getElementById('img');
let currentImageIndex = 0;

image_arr.forEach((image, index) => {
    const element = document.createElement('img');
    element.src = image.src;
    element.alt = image.alt;
    if (index === 0) element.classList.add('active'); 
    images_slider.appendChild(element);
});


function displayImage(index) {
    const images = images_slider.getElementsByTagName('img');
   
    for (let img of images) {
        img.classList.remove('active');
    }
    images[index].classList.add('active');
    updatePageNumber(index + 1); 
}


function updatePageNumber(pageNo) {
    const numNavLinks = document.querySelectorAll('.num_nav a');
    numNavLinks.forEach(link => link.classList.remove('active')); 
    numNavLinks[pageNo - 1].classList.add('active'); 
}




function togglePrevNextButtons() {
    const prevButton = document.querySelector('.pre a');
    const nextButton = document.querySelector('.next a');
    prevButton.style.display = currentImageIndex === 0 ? 'none' : 'inline';  
    nextButton.style.display = currentImageIndex === image_arr.length - 1 ? 'none' : 'inline';  
}
function hello(pageNo) {
    currentImageIndex = pageNo - 1;
    displayImage(currentImageIndex);
    togglePrevNextButtons();
}



function next() {
    if (currentImageIndex < image_arr.length - 1) {
        currentImageIndex++;
        displayImage(currentImageIndex);
    }
    togglePrevNextButtons();
}


function pre() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        displayImage(currentImageIndex);
    }
    togglePrevNextButtons();
}


displayImage(currentImageIndex);
togglePrevNextButtons();


document.querySelectorAll('.num_nav a').forEach((link, index) => {
    link.addEventListener('click', function () {
        hello(index + 1); 
    });
});