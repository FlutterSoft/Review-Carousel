// local reviews data
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "../images/person1.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "../images/person2.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "../images/person3.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "../images/person4.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];


  // dom elements


  const img = document.querySelector('#person-img')
  const author = document.querySelector('#author')
  const job = document.querySelector('#job')
  const info = document.querySelector('#info')
  console.log(img)

  const nextBtn = document.querySelector('.next-btn')
  const prevBtn = document.querySelector('.prev-btn')
  const randomBtn = document.querySelector('.random-btn')

// start item
let currentItem = 0;


// load initial item
window.addEventListener('DOMContentLoaded', function(){
    loadReview()
})

function loadReview(){
    const item = reviews[currentItem]   
    img.src = item.img
    author.innerText = item.name
    job.innerText = item.job
    info.innerText = item.text
}

nextBtn.addEventListener('click', function() {
    currentItem++
    if(currentItem >= reviews.length-1){
        currentItem = reviews.length-1
    }
    loadReview()
})

prevBtn.addEventListener('click', function() {
    currentItem--
    if(currentItem <= 0){
        currentItem = 0
    }
    loadReview()
})

function changeReview(){

}