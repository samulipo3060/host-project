let products=[{id:"123-4-1",image:"images/rainbow.jpg",rating:{star:"icons/rating-45.png",count:8},price:"$13.45"},{id:"123-4-2",image:"images/laptop.jpg",rating:{star:"icons/rating-45.png",count:100},price:"$200.45"}]

let accumulator = ''
products.forEach((prod)=>{
  accumulator+=`<div class="product-container">
  <div class="laptop">
    <img class="laptop-pic" src="${prod.image}">
  </div>
  <div class="laptop-name">
    ${prod.id}
  </div>
  <div class="stars-count-container">
      <img class="star" src="${prod.rating.star}">
    <div class="count">
      ${prod.rating.count}
    </div>
  </div>
  <div class="price">
    ${prod.price}
  </div>
  <div class="list">
    <select>
      <option selected value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  </div>
  <div class="spacer-for-checkmark"></div>
  <div class="button-add-tocart">
    <button class="btns" data-item-Name="${prod.id}">add to cart</button>
  </div>
</div>    `
})
let cart =[];
 const pageInfo = document.querySelector('.grid-container').innerHTML=accumulator;
 const allButtons=document.querySelectorAll('.btns');
 allButtons.forEach((button)=>{button.addEventListener('click',()=>{
  let productDetail=button.dataset.itemName;
  console.log(productDetail)
  cart.push({productId:productDetail,Quantity:0})
 let matchingItem;
  cart.forEach((cartItem)=>{
    if(productDetail===cartItem.productId){
     matchingItem=cartItem;
    }
  });
  if(matchingItem){
    matchingItem.Quantity+=1
  }else{
    cart.push({productId:productDetail,Quantity:1})
  }
  let cartIndicate=0;
  cart.forEach((iterms)=>{
    cartIndicate+=iterms.Quantity
  })
  
 document.querySelector('.number').innerHTML=cartIndicate;
 
 })})


