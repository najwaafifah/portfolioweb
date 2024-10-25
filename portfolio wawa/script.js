<script>
    document.addEventListener('DOMContentLoaded', function() {
      document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();

          const targetId = this.getAttribute('href');
          document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });
    });
  </script>