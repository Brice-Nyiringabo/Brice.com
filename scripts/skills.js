// In case you'd like to add interactivity in the future
document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll('.progress-bar');
  
  // Example of adding an animation when page loads
  progressBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0%';
    setTimeout(() => {
      bar.style.transition = 'width 1.5s ease';
      bar.style.width = width;
    }, 300);
  });
});
