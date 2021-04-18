'use strict';


let leftImageElement = document.getElementById('left-image');
let rightImageElement = document.getElementById('right-image');
let midimageElemnt = document.getElementById('mid-image');



let counts = 0;
let maxAttempts = 25;
let leftIndex; 
let rightIndex;
let midindex;

function product(name,source){
  this.name= name;
  this.source = source;
  this.time = 0;
  this.votes = 0;
  product.allImages.push(this);
}


product.allImages =[];



new product('bag','../images/bag.jpg');//[0]
new product('banana','../images/banana.jpg');//[0]
new product('bathroom','../images/bathroom.jpg');//[0]
new product('boots','../images/boots.jpg');//[0]
new product('breakfast','../images/breakfast.jpg');//[0]

new product('bubblegum','../images/bubblegum.jpg');//[0]
new product('chair','../images/chair.jpg');//[0]
new product('cthulhu','../images/cthulhu.jpg');//[0]
new product('dog-duck','../images/dog-duck.jpg');//[0]
new product('dragon','../images/dragon.jpg');//[0]

new product('pen','../images/pen.jpg');//[0]
new product('pet-sweep','../images/pet-sweep.jpg');//[0]
new product('scissors','../images/scissors.jpg');//[0]
new product('shark','../images/shark.jpg');//[0]
new product('weep','../images/sweep.png');//[0]

new product('tauntaun','../images/tauntaun.jpg');//[0]
new product('unicorn','../images/unicorn.jpg');//[0]
new product('usb','../images/usb.gif');//[0]
new product('water-can','../images/water-can.jpg');//[0]
new product('glass','../images/wine-glass.jpg');//[0]


console.log(product.allImages);

function renderthreeImages(){
  leftIndex = genrateRandomIndex(); //0 - 7
  midindex =  genrateRandomIndex();
  rightIndex = genrateRandomIndex(); // 0 - 7 
  

  while(leftIndex === rightIndex || leftIndex === midindex || rightIndex === midindex ){
    leftIndex = genrateRandomIndex();
    rightIndex = genrateRandomIndex()
  }

  // here I have three indexes [left,mid,right] example[1,5,13]
  
  leftImageElement.src =  product.allImages[leftIndex].source;
  rightImageElement.src = product.allImages[rightIndex].source;
  midimageElemnt.src = product.allImages[midindex].source
  product.allImages[leftIndex].time++
  product.allImages[rightIndex].time++
  product.allImages[midindex].time++


}

renderthreeImages();

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
        product.allImages[midindex].votes++;
}


    renderthreeImages();
    console.log(product.allImages);
  }else {
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
    li.textContent = `${product.allImages[i].name}  has ${product.allImages[i].votes} Votes and it has appeared ${product.allImages[i].time} times`;
  }
  
}

let submit=document.getElementById('submitt');
submit.addEventListener('click', renderList)



function genrateRandomIndex(){
   return Math.floor(Math.random() * product.allImages.length); 
                  // 0.99999999999 * 8 => 7.999999994 floor()  => 7
                  // 0.99999999999  * 5 => 4.999999 floor => 4
}