        function createBalls(color, count) {
            for (let i = 0; i < count; i++) {
                const ball = document.createElement('div');
                ball.classList.add('ball', color);
                document.getElementById('container').appendChild(ball);
            }
        }

        createBalls('red', 10);
        createBalls('green', 10);
        createBalls('white', 1);

        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }

        function moveBalls() {
            const container = document.getElementById('container');
            const balls = container.querySelectorAll('.ball');
            const containerWidth = container.clientWidth;
            const containerHeight = container.clientHeight;
            const ballSize = 15;

            balls.forEach(ball => {
                const x = getRandomArbitrary(0, containerWidth - ballSize);
                const y = getRandomArbitrary(0, containerHeight - ballSize);
                ball.style.transform = `translate(${x}px, ${y}px)`;
            });
        }

        setInterval(moveBalls, 1000);
