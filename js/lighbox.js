const images = document.querySelectorAll('.img-gallery')
const lightImages= document.querySelector('.add-image')
const lightContainer = document.querySelector('.image-ligth')
const hamburguer1 = document.querySelector('.hamburguer-menu')

images.forEach(image => {
  image.addEventListener('click', ()=>{
    showImage(image.getAttribute('src'))
  })
})

lightContainer.addEventListener('click', (e) =>{
  if (e.target !== lightImages) {
  lightContainer.classList.toggle('show')
  lightImages.classList.toggle('showImage')
  hamburguer1.style.opacity = '1'  
  }
})

const showImage = (image) => {
  lightImages.src = image;
  lightContainer.classList.toggle('show')
  lightImages.classList.toggle('showImage')
  hamburguer1.style.opacity = '0'
}