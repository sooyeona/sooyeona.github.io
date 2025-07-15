$(document).ready(function () {

  // 탭 메뉴
  $(document).on('click', '[data-tab]', function () {
      const activeTab = $(this).attr('data-tab');
      let $target =$('[data-target="' + activeTab + '"]');
      $(this).siblings().removeClass('is-active');
      $(this).addClass('is-active');
      $target.siblings().removeClass('is-active');
      $target.addClass('is-active');
      if(activeTab !== 'about'){
        $('.card').addClass('is-active');
      }else{
        $('.card').removeClass('is-active');
      }
  });

})


 // layer 띄우기
 $(document).on('click', '[data-pop]', function () {
  const $target = $(this).attr('data-pop');
  const $this = '[data-target="' + $target + '"]';
  $($this).addClass('is-active');
});
// layer 띄우기


// layer 끄기
$(document).on('click', '.circle', function () {
  $(this).parents('.popup').removeClass('is-active');
});
// layer 끄기

  


$(".card__cont__item__skill__box h3").on("click",function(){
  $(".progress").show();


  
// skill progress
function numberCounter(target_frame, target_number) {
  this.count = 0; 
  this.diff = 0;
  this.target_count = parseInt(target_number);
  this.target_frame = document.getElementById(target_frame);
  this.timer = null;
  this.counter();
};

numberCounter.prototype.counter = function() {
  var self = this;
  this.diff = this.target_count - this.count;
   
  if(this.diff > 0) {
      self.count += Math.ceil(this.diff / 5);
  }
   
  this.target_frame.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
   
  if(this.count < this.target_count) {
      this.timer = setTimeout(function() { self.counter(); }, 60);
  } else {
      clearTimeout(this.timer);
  }
};
 new numberCounter("counter1", 90);
 new numberCounter("counter2", 80);
 new numberCounter("counter3", 70);
 new numberCounter("counter4", 40);

 
})



