
    // // ******************************************************************* *

    // document.addEventListener("DOMContentLoaded", function() {
    //     const track = document.getElementById("image-track");
    //     let prevPercentage = 0;
    //     let animationId;
    //     const animationDuration = 80000; // Duration of animation in milliseconds
    
    //     function animateGallery() {
    //       const currentTime = Date.now();
    //       const elapsedTime = currentTime - startTime;
    //       const percentage = Math.sin((elapsedTime / animationDuration) * Math.PI) * -100;
    //       const nextPercentage = Math.max(Math.min(percentage, 0), -100);
    
    //       track.style.transform = `translate(${nextPercentage}%, -50%)`;
    
    //       const images = track.querySelectorAll(".image-sl");
    //       images.forEach(image => {
    //         image.style.objectPosition = `${100 + nextPercentage}% center`;
    //       });
    
    //       if (elapsedTime < animationDuration) {
    //         animationId = requestAnimationFrame(animateGallery);
    //       } else {
    //         startTime = null;
    //         animationId = null;
    //       }
    //     }

    
    //     function startAutoLoop() {
    //       startTime = Date.now();
    //       animateGallery();
    //     }
    
    //     function stopAutoLoop() {
    //       cancelAnimationFrame(animationId);
    //     }
    
    //     track.addEventListener("mouseenter", startAutoLoop);
    //     track.addEventListener("mouseleave", stopAutoLoop);
    
    //     // Start auto-loop initially
    //     let startTime = Date.now();
    //     animateGallery();
    //   });



    document.addEventListener("DOMContentLoaded", function() {
        const track = document.getElementById("image-track");
        const images = track.querySelectorAll(".image-sl");
        const numImages = images.length;
        const imageWidth = images[0].offsetWidth;
        let animationId;
        const animationDuration = 80000; // Duration of animation in milliseconds
    
        function animateGallery() {
            const currentTime = Date.now();
            const elapsedTime = (currentTime - startTime) % animationDuration; // Get elapsed time modulo animation duration
            const distance = (elapsedTime / animationDuration) * imageWidth; // Calculate distance traveled
            const nextPercentage = -((distance / imageWidth) % numImages) * 100; // Calculate next percentage based on distance traveled
    
            track.style.transform = `translate(${nextPercentage}%, -50%)`;
    
            animationId = requestAnimationFrame(animateGallery); // Continue animation loop
        }
    
        function startAutoLoop() {
            startTime = Date.now();
            animateGallery();
        }
    
        function stopAutoLoop() {
            cancelAnimationFrame(animationId);
        }
    
        track.addEventListener("mouseenter", startAutoLoop);
        track.addEventListener("mouseleave", stopAutoLoop);
    
        // Start auto-loop initially
        let startTime = Date.now();
        animateGallery();
    });