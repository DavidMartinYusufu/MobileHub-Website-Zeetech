const openBtn = document.querySelector(".open_btn");
const navMenu = document.querySelector(".nav_menu");

openBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navMenu.classList.toggle("hidden");
});

// const counters = document.querySelectorAll('.counter');

//   counters.forEach(counter => {
//     const target = +counter.getAttribute('data-target');
//     let count = 0;
//     const speed = 400; // smaller = faster

//     const updateCount = () => {
//       const increment = target / speed;

//       if (count < target) {
//         count += increment;
//         counter.textContent = Math.ceil(count);
//         requestAnimationFrame(updateCount);
//       } else {
//         counter.textContent = target;
//       }
//     };

//     updateCount();
//   });

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  const runCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const speed = 300;
    const increment = target / speed;

    const update = () => {
      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target;
      }
    };

    update();
  };

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          obs.unobserve(entry.target); // Only run once
        }
      });
    },
    {
      threshold: 0.6, // Trigger when 60% visible
    }
  );

  counters.forEach((counter) => {
    observer.observe(counter);
  });
});
