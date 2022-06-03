const navList = document.querySelector('.p-header__nav');
const topPage = document.querySelector('.p-top');
// const navListChild = document.querySelector.navList.children;
// console.log(navListChild);
// console.log(topPage);
// document.addEventListener('mouseover',function(event){
//   // console.log(event.target);


// event.target.addEventListener('mouseover',function(){
//   const bgcolor = window.getComputedStyle(topPage).background; 
//   const listcolor = window.getComputedStyle(event.target).background;
//   console.log(listcolor); 
//   console.log(event.target); 
//   topPage.animate(
//     {
//       background:[bgcolor,listcolor]
//     },
//     {
//       fill:"forwards",
//       duration: 1000
//     }
//   );
// });
// navList.addEventListener('mouseleave',function(){
//   const bgcolor = window.getComputedStyle(topPage).background; 
//   topPage.animate(
//     {
//       background:[bgcolor,"black"]
//     },
//     {
//       fill:"forwards",
//       duration: 1000
//     }
//   );
// });


// })



document.addEventListener('mouseover',function(event){
  // console.log(event.target);
  const bgcolor = window.getComputedStyle(topPage).background; 
  const listcolor = window.getComputedStyle(this.target).background;
  console.log(listcolor); 
  console.log(this.target); 
  topPage.animate(
    {
      background:[bgcolor,listcolor]
    },
    {
      fill:"forwards",
      duration: 1000
    }
  );
})

navList.addEventListener('mouseleave',function(){
  const bgcolor = window.getComputedStyle(topPage).background; 
  topPage.animate(
    {
      background:[bgcolor,"black"]
    },
    {
      fill:"forwards",
      duration: 1000
    }
  );
});




// for(let i=0; i<6; i++){
// navList.addEventListener('mouseover',function(){
//   const bgcolor = window.getComputedStyle(topPage).background; 
//   const listcolor = window.getComputedStyle(navList.children[i]).background;
//   console.log(navList.children[i]); 
//   topPage.animate(
//     {
//       background:[bgcolor,listcolor]
//     },
//     {
//       fill:"forwards",
//       duration: 1000
//     }
//   );
// });
// navList.addEventListener('mouseleave',function(){
//   const bgcolor = window.getComputedStyle(topPage).background; 
//   topPage.animate(
//     {
//       background:[bgcolor,"black"]
//     },
//     {
//       fill:"forwards",
//       duration: 1000
//     }
//   );
// });
// }