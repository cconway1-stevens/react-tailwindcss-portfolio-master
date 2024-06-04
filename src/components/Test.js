import React, { useEffect } from 'react';
import gsap from 'gsap';

const data = [
    {
        place: 'Switzerland Alps',
        title: 'SAINT',
        title2: 'ANTONIEN',
        description: 'Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat for those seeking tranquility and adventure alike. It\'s a hidden gem for backcountry skiing in winter and boasts lush trails for hiking and mountain biking during the warmer months.',
        image: 'https://assets.codepen.io/3685267/timed-cards-1.jpg'
    },
    // Add other data objects here...
];

const TimedCards = () => {
    useEffect(() => {
        const _ = (id) => document.getElementById(id);
        const cards = data.map((i, index) => `<div class="card" id="card${index}" style="background-image:url(${i.image})"></div>`).join('');

        const cardContents = data.map((i, index) => `<div class="card-content" id="card-content-${index}">
            <div class="content-start"></div>
            <div class="content-place">${i.place}</div>
            <div class="content-title-1">${i.title}</div>
            <div class="content-title-2">${i.title2}</div>
        </div>`).join('');

        const sildeNumbers = data.map((_, index) => `<div class="item" id="slide-item-${index}" >${index + 1}</div>`).join('');

        _('demo').innerHTML = cards + cardContents;
        _('slide-numbers').innerHTML = sildeNumbers;

        const range = (n) => Array(n).fill(0).map((i, j) => i + j);
        const set = gsap.set;

        function getCard(index) {
            return `#card${index}`;
        }

        function getCardContent(index) {
            return `#card-content-${index}`;
        }

        function getSliderItem(index) {
            return `#slide-item-${index}`;
        }

        function animate(target, duration, properties) {
            return new Promise((resolve) => {
                gsap.to(target, {
                    ...properties,
                    duration: duration,
                    onComplete: resolve,
                });
            });
        }

        async function handleDelayedCall(slideItem, cardContent, ease) {
            await animate(slideItem, 0.5, {
                scale: 1,
                ease: ease,
            });

            await animate(cardContent, 0.5, {
                opacity: 0,
                ease: ease,
            });
        }

        async function step() {
            const tl = gsap.timeline();
            const currentOrder = order.slice();

            for (const i of currentOrder) {
                const card = getCard(i);
                const cardContent = getCardContent(i);
                const slideItem = getSliderItem(i);

                tl.set(card, {
                    zIndex: order.length,
                });

                await animate(card, 1, {
                    xPercent: 0,
                    yPercent: 0,
                    ease: ease,
                });

                if (detailsEven) {
                    await animate(cardContent, 0.5, {
                        xPercent: -100,
                        opacity: 1,
                        ease: ease,
                    });
                } else {
                    await animate(cardContent, 0.5, {
                        xPercent: 100,
                        opacity: 1,
                        ease: ease,
                    });
                }

                await animate(slideItem, 0.5, {
                    scale: 2,
                    ease: ease,
                });

                await gsap.delayedCall(2, handleDelayedCall, [slideItem, cardContent, ease]);

                await animate(card, 1, {
                    xPercent: -50,
                    yPercent: -50,
                    ease: ease,
                });
            }

            order.push(order.shift());
            detailsEven = !detailsEven;
            clicks++;
        }

        async function loop() {
            const maxIterations = 10; // Set the desired maximum number of iterations
            let iterations = 0;

            while (iterations < maxIterations) {
                await step();
                iterations++;
            }
        }

        async function loadImage(src) {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.onerror = reject;
                img.src = src;
            });
        }

        async function loadImages() {
            const promises = data.map((item) => loadImage(item.image));
            await Promise.all(promises);
        }

        async function start() {
            await loadImages();
            init();
            loop();
        }

        start();
    }, []);

    return (
        <div className="relative">
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div id="demo" className="relative w-5/6 h-96 rounded-lg overflow-hidden bg-cover bg-center"></div>
                <div id="slide-numbers" className="absolute bottom-0 right-0 mb-8 mr-8 grid grid-cols-1 gap-4"></div>
            </div>
        </div>
    );
};

export default TimedCards;
