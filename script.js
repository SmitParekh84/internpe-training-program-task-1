document.addEventListener("DOMContentLoaded", function(event) {
    let body = document.querySelector('body');
    let result = document.querySelector('#result');

    let dark_mode_btn = document.querySelector('.dark_mode_btn');
    let clear = document.querySelector('#clear');
    let history = document.querySelector('#history');
    let equalTo = document.querySelector('#equalTo');
    let delete_single_num = document.querySelector('#delete_single_num');

    let Normal_btn = document.querySelectorAll('#Normal_btn');


    let initial_value = "";


    document.addEventListener('DOMContentLoaded', function() {
        const resultElement = document.getElementById('result');

        function adjustFontSize() {
            if (resultElement.scrollHeight > resultElement.clientHeight || resultElement.scrollWidth > resultElement.clientWidth) {
                resultElement.classList.add('shrink-font');
            } else {
                resultElement.classList.remove('shrink-font');
            }
        }

        adjustFontSize(); // Initially adjust font size

        // Check font size on window resize
        window.addEventListener('resize', function() {
            adjustFontSize();
        });
    });


    Normal_btn.forEach((Normal_btn, index) => {
        Normal_btn.addEventListener('click', function() {
            let text = this.innerHTML;
            initial_value += text;
            result.innerHTML = initial_value;
        });
    });

    /*equal to button action*/
    equalTo.addEventListener('click', function() {
        if (result.innerHTML != "") {
            history.innerHTML = result.innerHTML;
            // history.innerHTML = `${result.innerHTML} = ${eval(result.innerHTML)}`;
            result.innerHTML = eval(result.innerHTML);
            initial_value = eval(result.innerHTML);
        } else {
            alert('please enter any Number');
        }
    });


    /*dark_mode*/
    let dark_mode_status = false;
    dark_mode_btn.addEventListener('click', function() {
        body.classList.toggle('dark_mode_active');
        if (dark_mode_status == false) {
            this.innerHTML = '<i class="fa fa-sun-o" aria-hidden="true"></i>';
            dark_mode_status = true;
        } else {
            this.innerHTML = '<i class="fa fa-moon-o" aria-hidden="true"></i>';
            dark_mode_status = false;
        }
    });


    /*clear all number*/
    clear.addEventListener('click', function() {
        result.innerHTML = "";
        initial_value = "";
    });

    /*delete single number*/
    delete_single_num.addEventListener('click', function() {
        result.innerHTML = result.innerHTML.substring(0, result.innerHTML.length - 1);
        initial_value = result.innerHTML;
    });

});





// JavaScript to add animation when images are in viewport
// Function to handle the intersection observer
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.animated-image');

    // Create an intersection observer instance
    const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 0.3 // Adjust this threshold value as needed
    });

    // Observe each image
    images.forEach(image => {
        observer.observe(image);
    });
});

$(window).scroll(function() {
    $('.animated-image').each(function() {
        var imagePos = $(this).offset().top;
        var windowHeight = $(window).height();
        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow + windowHeight - 100) {
            $(this).addClass('fade-in');
        }
    });
});



(function($) {
    "use strict";

    // Spinner
    var spinner = function() {
        setTimeout(function() {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    // $(document).ready(function() {
    //     // Define an array of image paths
    //     // var imagePaths = ["./img/undraw_mobile_web_-2-g8b.svg", "./img/undraw_website_pl4v.svg", "./img/undraw_website_setup_re_d4y9.svg"];
    //     var imagePaths = ["./img/img1.png", "./img/img2.png", "./img/img3.png"];

    //     var currentIndex = 0; // Current index of the image being displayed

    //     // Function to change the image with fade animation
    //     function changeImage() {
    //         // Fade out the current image
    //         $("#myImage").fadeOut("slow", function() {
    //             // Change the source attribute of the image to the next image
    //             $(this).attr("src", imagePaths[currentIndex]);
    //             // Fade in the new image
    //             $(this).fadeIn("slow");
    //         });

    //         // Increment the index to display the next image in the array
    //         currentIndex++;
    //         // If currentIndex exceeds the array length, reset it to 0
    //         if (currentIndex >= imagePaths.length) {
    //             currentIndex = 0;
    //         }
    //     }

    //     // Call the changeImage function initially
    //     changeImage();

    //     // Set an interval to change the image every 5 seconds (5000 milliseconds)
    //     setInterval(changeImage, 5000);
    // });

    // Initiate the wowjs animation library
    $(document).ready(function() {
        // Show back-to-top button when scrolling down
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').css('opacity', '1').css('visibility', 'visible');
            } else {
                $('.back-to-top').css('opacity', '0').css('visibility', 'hidden');
            }
        });

        // Smooth scroll to top when button is clicked
        $('.back-to-top').click(function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 'slow');
        });
    });
})(jQuery);

document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.querySelector('.back-to-top');

    // Function to smoothly scroll to the top of the page
    function scrollToTop() {
        const scrollDuration = 1000; // milliseconds
        const scrollStep = -window.scrollY / (scrollDuration / 15);
        const scrollInterval = setInterval(function() {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    }

    // Add fade-in animation
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });

    // Smooth scroll to top when button is clicked
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToTop();
    });
});