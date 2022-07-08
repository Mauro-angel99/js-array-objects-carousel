const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
];


const gallery = document.getElementById(`gallery`)

let sorce = ``

for (let i = 0; i < images.length; i++) {
    sorce += `<div id="image"><h2>${images[i].title}</h2><img src="${images[i].url}" alt=""><p>${images[i].description}</p></div>`
}

gallery.innerHTML = sorce


const prev = document.getElementById(`prev`)
const next = document.getElementById(`next`)

let image = document.querySelectorAll(`#image`)

let active = 0

image[active].classList.add(`active`)

next.addEventListener(`click`, function () {
    image[active].classList.remove(`active`)

    active++


    if (active === image.length) {
        active = 0
    }


    image[active].classList.add(`active`)

})

prev.addEventListener(`click`, function () {
    image[active].classList.remove(`active`)

    active--

    if (active < 0) {
        active = image.length - 1
    }


    image[active].classList.add(`active`)
})



