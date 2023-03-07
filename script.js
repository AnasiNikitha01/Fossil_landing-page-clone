let women = document.getElementById('women');
let cont1=document.querySelector('.container1');


women.addEventListener('mouseover',()=>{
     cont1.style.display='block';
})
women.addEventListener('mouseout',()=>{
     cont1.style.display='none';
})

cont1.addEventListener("mouseenter", function() {
    cont1.style.display = "block";
  });
  
  cont1.addEventListener("mouseleave", function() {
    cont1.style.display = "none";
  });
  
  
let men = document.getElementById('men');
let cont2=document.querySelector('.container2');


men.addEventListener('mouseover',()=>{
     cont2.style.display='block';
})
men.addEventListener('mouseout',()=>{
     cont2.style.display='none';
})

cont2.addEventListener("mouseenter", function() {
    cont2.style.display = "block";
  });
  
  cont2.addEventListener("mouseleave", function() {
    cont2.style.display = "none";
  });
  
  
let watches = document.getElementById('watches');
let cont3=document.querySelector('.container3');


watches.addEventListener('mouseover',()=>{
     cont3.style.display='block';
})
watches.addEventListener('mouseout',()=>{
     cont3.style.display='none';
})

cont3.addEventListener("mouseenter", function() {
    cont3.style.display = "block";
  });
  
  cont3.addEventListener("mouseleave", function() {
    cont3.style.display = "none";
  });
  
  
let bags = document.getElementById('bags');
let cont4=document.querySelector('.container4');


bags.addEventListener('mouseover',()=>{
     cont4.style.display='block';
})
bags.addEventListener('mouseout',()=>{
     cont4.style.display='none';
})

cont4.addEventListener("mouseenter", function() {
    cont4.style.display = "block";
  });
  
  cont4.addEventListener("mouseleave", function() {
    cont4.style.display = "none";
  });


let wallet = document.getElementById('wallet');
let cont5=document.querySelector('.container5');


wallet.addEventListener('mouseover',()=>{
     cont5.style.display='block';
})
wallet.addEventListener('mouseout',()=>{
     cont5.style.display='none';
})

cont5.addEventListener("mouseenter", function() {
    cont5.style.display = "block";
  });
  
  cont5.addEventListener("mouseleave", function() {
    cont5.style.display = "none";
  });
  
  
let jwelery = document.getElementById('jwelery');
let cont6=document.querySelector('.container6');


jwelery.addEventListener('mouseover',()=>{
     cont6.style.display='block';
})
jwelery.addEventListener('mouseout',()=>{
     cont6.style.display='none';
})

cont6.addEventListener("mouseenter", function() {
    cont6.style.display = "block";
  });
  
  cont6.addEventListener("mouseleave", function() {
    cont6.style.display = "none";
  });
  
  
let sale = document.getElementById('sale');
let cont7=document.querySelector('.container7');


sale.addEventListener('mouseover',()=>{
     cont7.style.display='block';
})
sale.addEventListener('mouseout',()=>{
     cont7.style.display='none';
})

cont7.addEventListener("mouseenter", function() {
    cont7.style.display = "block";
  });
  
  cont7.addEventListener("mouseleave", function() {
    cont7.style.display = "none";
  });


let featured = document.getElementById('featured');
let cont8=document.querySelector('.container8');


featured.addEventListener('mouseover',()=>{
     cont8.style.display='block';
})
featured.addEventListener('mouseout',()=>{
     cont8.style.display='none';
})

cont8.addEventListener("mouseenter", function() {
    cont8.style.display = "block";
  });
  
  cont8.addEventListener("mouseleave", function() {
    cont8.style.display = "none";
  });


  let searcheng=document.querySelector('#search-eng');
   let search=document.querySelector(".search");
   
  searcheng.addEventListener('click',()=>{
       search.style.display='block';
  })
   let searchcancle=document.querySelector(".search>span");

  searchcancle.addEventListener('click',()=>{
       search.style.display='none';
  })

  let search_1 = document.querySelector('.search_1');
  let search1 = document.querySelector('.search1');
  let cancle_btn = document.querySelector('.search1>span');

  search_1.addEventListener('click',()=>{
     search_1.style.display = 'none';
     search1.style.display = 'inline';
  })

  cancle_btn.addEventListener('click',()=>{
     search1.style.display = 'none';
     search_1.style.display = 'inline';
  })




  let row1 = document.querySelector('#row13-1');
  let row2 = document.querySelector('#row13-2');
  let para1 = document.querySelector('.para1');
  let para2 = document.querySelector('.para2');

  row1.addEventListener('click',()=>{
     row1.style.display='none';
     row2.style.display='block';
     para1.style.display='block'
     para2.style.display='block'
  })
row2.addEventListener('click',()=>{
     row2.style.display='none';
     row1.style.display='block';
     para1.style.display='none'
     para2.style.display='none'
  })



let btn1 = document.querySelector('#top1');

btn1.addEventListener('click',function(){
    var section1= document.querySelector('.display')
    section1.scrollIntoView({behavior: "smooth"});

})

const display = document.querySelector('.display')
const header = document.querySelector('header')

window.addEventListener('scroll',()=>{
     // console.log(window.scrollY)
     if(window.scrollY>='300'){
          header.style.display = 'none'
          display.style.display = 'block'
     }
     else{
          header.style.display = 'block'
          display.style.display = 'none' 
          wrap.style.display = 'none'
     }
})


let toggle = document.querySelector('.toggle>i');
let open = document.querySelector('.open')
let open2 = document.querySelector('.open2')
let cross = document.querySelector('.cross');
let cross2 = document.querySelector('.cross2');
let wrap = document.querySelector('.wrap');
toggle.addEventListener('click',()=>{
     wrap.style.display = 'block';
     open.style.display = 'block';
})
cross.addEventListener('click',()=>{
     wrap.style.display = 'none';
     open.style.display = 'none';
     open2.style.display = 'none';
     
})
cross2.addEventListener('click',()=>{
     wrap.style.display = 'none';
     open.style.display = 'none';
     open2.style.display = 'none';
     
})


let open_women = document.getElementById('a')
let open_men = document.getElementById('b')
let open_watch = document.getElementById('c')
let open_bag = document.getElementById('d')
let open_wallet = document.getElementById('e')
let open_jwelery = document.getElementById('f')
let open_sale= document.getElementById('g')
let open_featured = document.getElementById('h')


let open_women1 = document.getElementById('women1')
let open_men1 = document.getElementById('men1')
let open_watch1 = document.getElementById('watches1')
let open_bag1 = document.getElementById('bags1')
let open_wallet1 = document.getElementById('wallets1')
let open_jwelery1 = document.getElementById('jewelry1')
let open_sale1= document.getElementById('sale1')
let open_featured1 = document.getElementById('featured1')

let toggle_bar1 = document.querySelectorAll('.toggle-bar>li>a')
let open_elements = document.querySelectorAll('.open-elements')
// let open2 = document.querySelector('.open2')

let back = document.querySelector('.back');

back.addEventListener('click',()=>{
     open2.style.display='none';
     open.style.display='block';
})


open_women.addEventListener('click',()=>{
     // open.style.display= 'none';
        open2.style.display = 'block'
      open_women1.style.display = 'block';
      open_men1.style.display = 'none';
      open_watch1.style.display = 'none';
      open_bag1.style.display = 'none';
      open_wallet1.style.display = 'none';
      open_jwelery1.style.display = 'none';
      open_sale1.style.display = 'none';
      open_featured1.style.display = 'none';
})
open_men.addEventListener('click',()=>{
     // open.style.display= 'none';
        open2.style.display = 'block'
        open_women1.style.display = 'none';
        open_men1.style.display = 'block';
        open_watch1.style.display = 'none';
        open_bag1.style.display = 'none';
        open_wallet1.style.display = 'none';
        open_jwelery1.style.display = 'none';
        open_sale1.style.display = 'none';
        open_featured1.style.display = 'none';
})
open_watch.addEventListener('click',()=>{
     // open.style.display= 'none';
        open2.style.display = 'block'
        open_women1.style.display = 'none';
        open_men1.style.display = 'none';
        open_watch1.style.display = 'block';
        open_bag1.style.display = 'none';
        open_wallet1.style.display = 'none';
        open_jwelery1.style.display = 'none';
        open_sale1.style.display = 'none';
        open_featured1.style.display = 'none';
})
open_bag.addEventListener('click',()=>{
     // open.style.display= 'none';
        open2.style.display = 'block'
       open2.style.display = 'block'
        open_women1.style.display = 'none';
        open_men1.style.display = 'none';
        open_watch1.style.display = 'none';
        open_bag1.style.display = 'block';
        open_wallet1.style.display = 'none';
        open_jwelery1.style.display = 'none';
        open_sale1.style.display = 'none';
        open_featured1.style.display = 'none';
})
open_wallet.addEventListener('click',()=>{
     // open.style.display= 'none';
        open2.style.display = 'block'
      open2.style.display = 'block'
        open_women1.style.display = 'none';
        open_men1.style.display = 'none';
        open_watch1.style.display = 'none';
        open_bag1.style.display = 'none';
        open_wallet1.style.display = 'block';
        open_jwelery1.style.display = 'none';
        open_sale1.style.display = 'none';
        open_featured1.style.display = 'none';
})
open_jwelery.addEventListener('click',()=>{
     // open.style.display= 'none';
        open2.style.display = 'block'
       open2.style.display = 'block'
        open_women1.style.display = 'none';
        open_men1.style.display = 'none';
        open_watch1.style.display = 'none';
        open_bag1.style.display = 'none';
        open_wallet1.style.display = 'none';
        open_jwelery1.style.display = 'block';
        open_sale1.style.display = 'none';
        open_featured1.style.display = 'none';
})
open_sale.addEventListener('click',()=>{
     // open.style.display= 'none';
        open2.style.display = 'block'
      open2.style.display = 'block'
        open_women1.style.display = 'none';
        open_men1.style.display = 'none';
        open_watch1.style.display = 'none';
        open_bag1.style.display = 'none';
        open_wallet1.style.display = 'none';
        open_jwelery1.style.display = 'none';
        open_sale1.style.display = 'block';
        open_featured1.style.display = 'none';
})
open_featured.addEventListener('click',()=>{
     // open.style.display= 'none';
        open2.style.display = 'block'
       open2.style.display = 'block'
        open_women1.style.display = 'none';
        open_men1.style.display = 'none';
        open_watch1.style.display = 'none';
        open_bag1.style.display = 'none';
        open_wallet1.style.display = 'none';
        open_jwelery1.style.display = 'none';
        open_sale1.style.display = 'none';
        open_featured1.style.display = 'block';
})

// ------------------------

let open_second = document.querySelector('.open_second');
let open_second2 = document.querySelector('.open_second2');

let toggleicon = document.querySelector('.toggle-icon');

let cross1 = document.querySelector('.cross1');
let cross2_2 = document.querySelector('.cross2_2');

toggleicon.addEventListener('click',()=>{
     open_second.style.display = 'block';
     wrap.style.display='block';
})
cross1.addEventListener('click',()=>{
     wrap.style.display='none';
     open_second.style.display = 'none';
})
cross2_2.addEventListener('click',()=>{
     wrap.style.display='none';
     open_second.style.display = 'none';
     open_second2.style.display = 'none';
})

let back2 = document.querySelector('.back2');
 back2.addEventListener('click',()=>{
     open_second2.style.display='none';
     open_second.style.display='block';
 })


 let open_women2 = document.getElementById('a1')
let open_men2 = document.getElementById('b1')
let open_watch2 = document.getElementById('c1')
let open_bag2 = document.getElementById('d1')
let open_wallet2 = document.getElementById('e1')
let open_jwelery2 = document.getElementById('f1')
let open_sale2= document.getElementById('g1')
let open_featured2 = document.getElementById('h1')


let open_women1_2 = document.getElementById('women1_2')
let open_men1_2 = document.getElementById('men1_2')
let open_watch1_2 = document.getElementById('watches1_2')
let open_bag1_2 = document.getElementById('bags1_2')
let open_wallet1_2 = document.getElementById('wallets1_2')
let open_jwelery1_2 = document.getElementById('jewelry1_2')
let open_sale1_2= document.getElementById('sale1_2')
let open_featured1_2 = document.getElementById('featured1_2')

open_women2.addEventListener('click',()=>{
     // open.style.display= 'none';
        open_second2.style.display = 'block'
      open_women1_2.style.display = 'block';
      open_men1_2.style.display = 'none';
      open_watch1_2.style.display = 'none';
      open_bag1_2.style.display = 'none';
      open_wallet1_2.style.display = 'none';
      open_jwelery1_2.style.display = 'none';
      open_sale1_2.style.display = 'none';
      open_featured1_2.style.display = 'none';
})
open_men2.addEventListener('click',()=>{
     // open.style.display= 'none';
        open_second2.style.display = 'block'
        open_women1_2.style.display = 'none';
        open_men1_2.style.display = 'block';
        open_watch1_2.style.display = 'none';
        open_bag1_2.style.display = 'none';
        open_wallet1_2.style.display = 'none';
        open_jwelery1_2.style.display = 'none';
        open_sale1_2.style.display = 'none';
        open_featured1_2.style.display = 'none';
})
open_watch2.addEventListener('click',()=>{
     // open.style.display= 'none';
        open_second2.style.display = 'block'
        open_women1_2.style.display = 'none';
        open_men1_2.style.display = 'none';
        open_watch1_2.style.display = 'block';
        open_bag1_2.style.display = 'none';
        open_wallet1_2.style.display = 'none';
        open_jwelery1_2.style.display = 'none';
        open_sale1_2.style.display = 'none';
        open_featured1_2.style.display = 'none';
})
open_bag2.addEventListener('click',()=>{
     // open.style.display= 'none';
        open_second2.style.display = 'block'
      
        open_women1_2.style.display = 'none';
        open_men1_2.style.display = 'none';
        open_watch1_2.style.display = 'none';
        open_bag1_2.style.display = 'block';
        open_wallet1_2.style.display = 'none';
        open_jwelery1_2.style.display = 'none';
        open_sale1_2.style.display = 'none';
        open_featured1_2.style.display = 'none';
})
open_wallet2.addEventListener('click',()=>{
     // open.style.display= 'none';
        open_second2.style.display = 'block'
     
        open_women1_2.style.display = 'none';
        open_men1_2.style.display = 'none';
        open_watch1_2.style.display = 'none';
        open_bag1_2.style.display = 'none';
        open_wallet1_2.style.display = 'block';
        open_jwelery1_2.style.display = 'none';
        open_sale1_2.style.display = 'none';
        open_featured1_2.style.display = 'none';
})
open_jwelery2.addEventListener('click',()=>{
     // open.style.display= 'none';
        open_second2.style.display = 'block'
      
        open_women1_2.style.display = 'none';
        open_men1_2.style.display = 'none';
        open_watch1_2.style.display = 'none';
        open_bag1_2.style.display = 'none';
        open_wallet1_2.style.display = 'none';
        open_jwelery1_2.style.display = 'block';
        open_sale1_2.style.display = 'none';
        open_featured1_2.style.display = 'none';
})
open_sale2.addEventListener('click',()=>{
     // open.style.display= 'none';
        open_second2.style.display = 'block'
      
        open_women1_2.style.display = 'none';
        open_men1_2.style.display = 'none';
        open_watch1_2.style.display = 'none';
        open_bag1_2.style.display = 'none';
        open_wallet1_2.style.display = 'none';
        open_jwelery1_2.style.display = 'none';
        open_sale1_2.style.display = 'block';
        open_featured1_2.style.display = 'none';
})
open_featured2.addEventListener('click',()=>{
     // open.style.display= 'none';
        open_second2.style.display = 'block'
     
        open_women1_2.style.display = 'none';
        open_men1_2.style.display = 'none';
        open_watch1_2.style.display = 'none';
        open_bag1_2.style.display = 'none';
        open_wallet1_2.style.display = 'none';
        open_jwelery1_2.style.display = 'none';
        open_sale1_2.style.display = 'none';
        open_featured1_2.style.display = 'block';
})


let search3 = document.querySelector('.search3');
let searchicon = document.querySelector('.search-icon');
let cancle_btn1 =document.querySelector('.search3>span');

searchicon.addEventListener('click',()=>{
     search3.style.display='block';
})

cancle_btn1.addEventListener('click',()=>{
     search3.style.display='none';
})
