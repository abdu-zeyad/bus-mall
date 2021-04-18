'use strict';
/*
  Practice domain modeling by planning out an app w that allows users to choose their favorite between three products
  Let students participate by suggesting the steps needed to make the app run
  Continue until students have provided enough detail that they feel confident they could build the app themselves

  App Flow:
  - Welcome and instructions
  - Randomly put 2 products on the screen
    - Random number generator
    - a function to display products
  - A user clicks on a product
    - event listener needs to be on the image to fire the event handler
    - the event handler fires
      - ? check if total clicks is 10 ?
        - stop letting the user click
        - display the clicks
      -? If not ?
        - track which product was clicked on
        - update clicke images count of how many times it has been clicked on
        - update both images'count of times shown
        - Randomly Pick 2 products, run the same code that put them on the screen to begin with

  HTML
    - have a left and right image container in the html
    - Give them id's so we can select them
    - let the user know what they are supposed to do
      - instructions

  More javascript details
  We need Objects with all the image properties
  var Image = function ()
  {
    name : 'cool product',
    votes: 0,
    times shown: 0,
    url : 'cool-product.jpg'
  }

  We need an Array to hold all image Objects

  function to randomly pick an image{
    Prevent last picked products from being picked
      - STRETCH pick all products evenly as possible
    Math.floor  Math.random() * array.length()
    make sure left and right image are unique
  }

  click on an image, targetted by id
  add event listener('click', function(){
    keep track of the image that is clicked
    prevent all currently displayed images from being re clicked {
    }
  })

  function to display all the clicks at the end () {
    generate a table or list
    populate the data - adds to the inner html of an existing element (table or list)
    divide object's times clicked by total shown
  }

*/

let leftImageElement = document.getElementById('left-image');
let rightImageElement = document.getElementById('right-image');
let midimageElemnt = document.getElementById('mid-image');


// whenever we click on an image we need to add one to a counter
// counts of the rounds till we reach 10
let counts = 0;
let maxAttempts = 10;
let leftIndex; 
let rightIndex;
let midindex;

function product(name,source){
  this.name= name;
  this.source = source;
  this.votes = 0;
  product.allImages.push(this);
}

// let allImages = [];
// an attribute
product.allImages =[];
// console.log(product.allImages);
// instances

new product('cruisin-product','../images/bag.jpg');//[0]
new product('cruisin-product','../images/banana.jpg');//[0]
new product('cruisin-product','../images/bathroom.jpg');//[0]
new product('cruisin-product','../images/boots.jpg');//[0]
new product('cruisin-product','../images/breakfast.jpg');//[0]



console.log(product.allImages);

function renderthreeImages(){
  leftIndex = genrateRandomIndex(); //0 - 7
  midindex =  genrateRandomIndex();
  rightIndex = genrateRandomIndex(); // 0 - 7 
  // while () or 
  //     /// 3    ===       3
  // if(leftIndex === rightIndex){ // its only once
  //   leftIndex = genrateRandomIndex(); // 3
  // }
  while(leftIndex === rightIndex || leftIndex === midindex || rightIndex === midindex ){
    leftIndex = genrateRandomIndex();
    rightIndex = genrateRandomIndex()
  }
  // console.log(leftIndex); // 3
  // console.log(rightIndex);             // product.allImages[3].source
  // displaying the images 
  leftImageElement.src =  product.allImages[leftIndex].source;
  rightImageElement.src = product.allImages[rightIndex].source;
  midimageElemnt.src = product.allImages[midindex].source
}

renderthreeImages();
// console.log(leftIndex);

leftImageElement.addEventListener('click', handleClicking);
rightImageElement.addEventListener('click',handleClicking);
midimageElemnt.addEventListener('click',handleClicking);

function handleClicking(event){
  // console.log(event.target.id);
    counts++; //0 11
    if(maxAttempts >= counts){
      if(event.target.id ==='left-image'){
         product.allImages[leftIndex].votes++;
       }else if(event.target.id ==='right-image'){
            product.allImages[rightIndex].votes++;
    }else if(event.target.id ==='mid-image'){
        product.allImages[rightIndex].votes++;
}
    renderthreeImages();
    console.log(product.allImages);
  }else {
    renderList()
    leftImageElement.removeEventListener('click', handleClicking);
    rightImageElement.removeEventListener('click',handleClicking);
    midimageElemnt.removeEventListener('click',handleClicking);

  }
}


function renderList(){
  let ul = document.getElementById('unList');
  for(let i = 0 ; i < product.allImages.length;i++){
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${product.allImages[i].name} it has ${product.allImages[i].votes} Votes`;
  }
}
// each time you are calling this function it will get a random value;

function genrateRandomIndex(){
   return Math.floor(Math.random() * product.allImages.length); 
                  // 0.99999999999 * 8 => 7.999999994 floor()  => 7
                  // 0.99999999999  * 5 => 4.999999 floor => 4
}