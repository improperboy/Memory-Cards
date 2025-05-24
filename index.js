 let currentPage = 1;
        let userName = '';

        // Create floating hearts
        function createFloatingHearts() {
            const heartsContainer = document.getElementById('floatingHearts');
            const hearts = ['💜', '💕', '💖', '🤍', '💗'];
            
            setInterval(() => {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
                heart.style.left = Math.random() * 100 + '%';
                heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
                heart.style.animationDelay = Math.random() * 2 + 's';
                heartsContainer.appendChild(heart);

                setTimeout(() => {
                    heart.remove();
                }, 8000);
            }, 3000);
        }

        // Create sparkles for thank you page
        function createSparkles() {
            const sparklesContainer = document.getElementById('sparkles');
            const sparkleSymbols = ['✨', '⭐', '💫', '🌟'];
            
            for (let i = 0; i < 6; i++) {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                sparkle.textContent = sparkleSymbols[Math.floor(Math.random() * sparkleSymbols.length)];
                sparkle.style.left = Math.random() * 100 + '%';
                sparkle.style.top = Math.random() * 100 + '%';
                sparkle.style.animationDelay = Math.random() * 2 + 's';
                sparklesContainer.appendChild(sparkle);
            }
        }

        // Start the journey
        function startJourney() {
            const nameInput = document.getElementById('nameInput');
            userName = nameInput.value.trim();
            
            if (userName === '') {
                nameInput.style.borderColor = '#ff6b9d';
                nameInput.placeholder = 'Please enter your name first! 💕';
                return;
            }
            
            document.getElementById('userName').textContent = userName;
            nextPage(2);
        }

        // Navigate to next page
        function nextPage(pageNumber) {
            // Hide current page
            document.getElementById(`page${currentPage}`).classList.remove('active');
            
            // Show next page after a short delay
            setTimeout(() => {
                currentPage = pageNumber;
                document.getElementById(`page${currentPage}`).classList.add('active');
                
                // Create sparkles when reaching thank you page
                if (pageNumber === 6) {
                    createSparkles();
                }
            }, 300);
        }

        // Restart the journey
        function restartJourney() {
            nextPage(1);
            document.getElementById('nameInput').value = '';
        }

        // Enable start button when name is entered
        document.getElementById('nameInput').addEventListener('input', function() {
            const startBtn = document.getElementById('startBtn');
            if (this.value.trim() !== '') {
                startBtn.disabled = false;
                this.style.borderColor = '#ff9ec7';
            } else {
                startBtn.disabled = true;
            }
        });

        // Allow Enter key to start journey
        document.getElementById('nameInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && this.value.trim() !== '') {
                startJourney();
            }
        });

        // Initialize floating hearts
        createFloatingHearts();

        // Add some extra cute interactions
        document.addEventListener('click', function(e) {
            // Create a small heart animation on click
            const heart = document.createElement('div');
            heart.textContent = '💕';
            heart.style.position = 'fixed';
            heart.style.left = e.clientX + 'px';
            heart.style.top = e.clientY + 'px';
            heart.style.fontSize = '1.5rem';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '1000';
            heart.style.animation = 'clickHeart 1s ease-out forwards';
            document.body.appendChild(heart);

            setTimeout(() => heart.remove(), 1000);
        });

        // Add click heart animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes clickHeart {
                0% {
                    opacity: 1;
                    transform: scale(0) translateY(0);
                }
                50% {
                    opacity: 1;
                    transform: scale(1) translateY(-20px);
                }
                100% {
                    opacity: 0;
                    transform: scale(0.5) translateY(-40px);
                }
            }
        `;
        document.head.appendChild(style);