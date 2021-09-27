let images_array=[
  'Gym/gym3.jpg',
  'Gym/gym4.jpg',
  'Gym/gym2.jpg',
  'Gym/gym6.jpg',
 
]
let pic=$('.gallery_pic')
let i=0;
setInterval(function(){
  i=(i+1) %images_array.length //return 0,1,2,3,0,1,2,3
  $(document).ready(function(){
    pic.fadeOut(2000, ()=>{
      pic.attr("src",images_array[i]);
      pic.fadeIn(2000);
});

  });
});