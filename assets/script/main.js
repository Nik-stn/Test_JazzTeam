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
const h1AnimationDuration = 1500;

const h1Keyframes = [
    { transform: 'translateX(-400px)', offset: 0 },
    { transform: 'translateY(0px)', offset: 1 },
];

const h1Options = {
    duration: h1AnimationDuration,
    fill: 'both',
    iterations: 1,
    easing: 'ease-in-out',
};

h2Animation.onfinish = () => {
    h1Title.animate(h1Keyframes, h1Options);
};