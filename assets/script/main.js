const h2Title = document.querySelector('.banner-title');
const h2AnimationDuration = 1000;

const h2Keyframes = [
    { transform: 'translateY(-200px) scale(0.5)', offset: 0 },
    { transform: 'translateY(0px) scale(0.7)', offset: 0.8 },
    { transform: 'scale(1)', offset: 1 },
];

const h2Options = {
    duration: h2AnimationDuration,
    fill: 'both',
    iterations: 1,
    easing: 'ease-out',
};

const h2Animation = h2Title.animate(h2Keyframes, h2Options);



const h1Title = document.querySelector('.banner-title-large');
const h1AnimationDuration = 2000;

const h1Keyframes = [
    { transform: 'translateX(-400px)', offset: 0 },
    { transform: 'translateY(0px)', offset: 0.5 },
    { transform: 'translateY(0px)', offset: 1 },
];

const h1Options = {
    duration: h1AnimationDuration,
    fill: 'both',
    iterations: 1,
    easing: 'ease-in-out',
};

const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');
const imgAnimationDuration = 2000;

const img1Keyframes = [
    { transform: 'rotate(-12.76deg)', offset: 0 },
    { transform: 'rotate(-52.76deg)', offset: 0.5 },
    { transform: 'rotate(-12.76deg)', offset: 1 },
];

const img2Keyframes = [
    { transform: 'rotate(6.43deg)', offset: 0 },
    { transform: 'rotate(46.43deg)', offset: 0.5 },
    { transform: 'rotate(6.43deg)', offset: 1 },
];

const img3Keyframes = [
    { transform: 'rotate(114.98deg)', offset: 0 },
    { transform: 'rotate(164.98deg)', offset: 0.5 },
    { transform: 'rotate(114.98deg)', offset: 1 },
];

const img4Keyframes = [
    { transform: 'rotate(0deg)', offset: 0 },
    { transform: 'rotate(-50deg)', offset: 0.5 },
    { transform: 'rotate(0deg)', offset: 1 },
];

const imgOptions = {
    duration: imgAnimationDuration,
    fill: 'both',
    iterations: 1,
    easing: 'cubic-bezier(0.25, 0.0, 0.75, 1)',
};


h2Animation.onfinish = () => {
    h1Title.animate(h1Keyframes, h1Options);
    img1.animate(img1Keyframes, imgOptions);
    img2.animate(img2Keyframes, imgOptions);
    img3.animate(img3Keyframes, imgOptions);
    img4.animate(img4Keyframes, imgOptions);
};