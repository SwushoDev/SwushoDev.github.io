document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("highlight");
            } else {
                entry.target.classList.remove("highlight");
            }
        });
    }, { threshold: 0.9 }); // Adjust threshold for when to highlight (50% in view)

    cards.forEach((card) => observer.observe(card));

        function applyTagRounding() {
            // For each `.tags` container
            document.querySelectorAll('.tags').forEach(function (container) {
                // Grab every .tag within this container
                const tags = container.querySelectorAll('.tag');

                // First, remove any old classes from previous runs
                tags.forEach(tag => {
                    tag.classList.remove('start-row', 'end-row');
                });

                let currentRowTop = null;

                tags.forEach((tag, index) => {
                    if (index === 0 || tag.offsetTop !== currentRowTop) {
                        // This tag is the "start" of a new row
                        tag.classList.add('start-row');

                        // The previous tag ends the previous row
                        if (index > 0) {
                            tags[index - 1].classList.add('end-row');
                        }
                    }
                    currentRowTop = tag.offsetTop;
                });

                // Mark the very last tag in the container as .end-row
                if (tags.length > 0) {
                    tags[tags.length - 1].classList.add('end-row');
                }
            });
        }

  // --- 1) Run once when the page loads ---
  applyTagRounding();

    // --- 2) Debounce the resize event ---
    let resizeTimer;
    window.addEventListener('resize', function() {
        // Clear any existing scheduled calls
        clearTimeout(resizeTimer);
    // Schedule a new call after 200ms
    resizeTimer = setTimeout(function() {
        applyTagRounding();
    }, 200);
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu-mobile");

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});