document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('button').forEach( button => {
    button.onclick = () => {
      document.querySelector('#hi').style.color = button.dataset.color;
    }
    // Tab to edit
  });
  
})