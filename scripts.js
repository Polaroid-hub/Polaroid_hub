
//

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
  }


document.getElementById("read-more-btn").addEventListener("click", function() {
var dots = document.getElementById("dots");
var moreText = document.getElementById("more");
var btnText = document.getElementById("read-more-btn");

if (moreText.style.display === "none") {
  moreText.style.display = "inline";
  dots.style.display = "none";
  btnText.innerHTML = "Read Less";
} else {
  moreText.style.display = "none";
  dots.style.display = "inline";
  btnText.innerHTML = "Read More";
}
});


// Initialize Bootstrap Carousel
const customerCarousel = document.querySelector('#customer-carousel');
if (customerCarousel) {
  const carousel = new bootstrap.Carousel(customerCarousel, {
    interval: 5000, // Auto-slide every 5 seconds
  });
}


// happy coustomer
document.addEventListener("DOMContentLoaded", () => {
    const videos = document.querySelectorAll(".customer-video");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.play();
          } else {
            entry.target.pause();
          }
        });
      },
      {
        threshold: 0.6, // Play when 50% of the video is visible
      }
    );
  
    videos.forEach((video) => {
      observer.observe(video);
    });
  });
  


  document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = new bootstrap.Carousel(document.getElementById('offerCarousel'), {
      interval: 5000, // Automatically change slide every 5 seconds
      ride: 'carousel'
    });
  
    var timelineBar = document.getElementById('timelineBar');
    var carouselItems = document.querySelectorAll('.carousel-item');
    var totalItems = carouselItems.length;
  
    // Reset the timeline bar when the slide changes
    var resetTimelineBar = () => {
      timelineBar.style.width = '0';
      timelineBar.style.animation = 'none';
      setTimeout(() => {
        timelineBar.style.animation = 'moveBar 5s linear infinite';
      }, 60); // Delay to re-trigger animation
    };
  
    // Listen for slide change and reset the timeline bar
    myCarousel._element.addEventListener('slide.bs.carousel', resetTimelineBar);
  
  });
  