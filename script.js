document.addEventListener('DOMContentLoaded', () => {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const itemCount = carouselItems.length;
    let currentIndex = 0;
    let interval;
  
    function showItem(index) {
      carouselItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
      });
    }
  
    function nextItem() {
      currentIndex = (currentIndex + 1) % itemCount;
      showItem(currentIndex);
    }
  
    function startCarousel() {
      interval = setInterval(nextItem, 3000);
    }
  
    function stopCarousel() {
      clearInterval(interval);
    }
  
    document.getElementById('openSidebar').addEventListener('click', () => {
      document.getElementById('mySidebar').classList.add('sidebar-open');
      stopCarousel(); // Stop carousel when sidebar is opened
    });
  
    document.getElementById('closeSidebar').addEventListener('click', () => {
      document.getElementById('mySidebar').classList.remove('sidebar-open');
      startCarousel(); // Restart carousel when sidebar is closed
    });
  
    // Start the carousel
    startCarousel();
  });
  