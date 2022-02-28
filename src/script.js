$(document).ready(() => {
    // MENU
    $(".navbar__menu-btn").on("click", function () {
        $(".navbar__links").toggleClass("active");
        $(this).find("i").toggleClass("fa-bars");
        $(this).find("i").toggleClass("fa-times");
    });


    // CAROUSEL

    const slickOptions = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
        nextArrow: '<button type="button" class="slick-next slider__next-arrow">Next</button>;'
    };
    $('.slider').slick(slickOptions);
      
    setInterval(() => {
        const numbersCollection = document.querySelectorAll(".counter__number");

        numbersCollection.forEach((number) => {
            const currentNumber = parseInt(number.innerHTML);
            //number.innerHTML = currentNumber + 1;
        });
    }, 5000);
        
    //const counterOptions = {
        //delay: 10,
        //time: 1000,
    //};

    //$('.counter__number').counterUp(counterOptions);
    $('.footer__form-button').on('click', () => {
        const email = $('#email').val();
        Email.send({
            Host : "smtp.yourisp.com",
            Username : "username",
            Password : "password",
            To : 'them@website.com',
            From : email,
            Subject : "Please, add me to your newsletter",
            Body : `Olá,
            I would like to receive your newsletter website.
            Meu e-mail é ${email}.
            Obrigado(a)!
            `,
        }).then(
          (message) => alert(message)
        );
    });
});