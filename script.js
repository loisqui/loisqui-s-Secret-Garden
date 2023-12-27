document.addEventListener("DOMContentLoaded", function () {
    const countdownTimer = document.getElementById("countdown-timer");
    const messageInput = document.getElementById("message-input");
    const danmuContainer = document.getElementById("danmu-container");

    function updateCountdownTimer(countdown) {
        const days = Math.floor(countdown / (24 * 60 * 60));
        const hours = Math.floor((countdown % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((countdown % (60 * 60)) / 60);
        const seconds = countdown % 60;

        countdownTimer.textContent = `Time Left: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    function updateCountdown() {
        const currentTimestamp = Math.floor(Date.now() / 1000);
        const newYearTimestamp = 1640995200; // 2024 年 1 月 1 日 00:00:00 UTC
        const countdown = Math.max(0, newYearTimestamp - currentTimestamp);

        updateCountdownTimer(countdown);
    }

    setInterval(updateCountdown, 1000);

    document.getElementById("submit-message").addEventListener("click", function () {
        const message = messageInput.value.trim();

        if (message !== "") {
            fetch("/post_message", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: message }),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.status === 'success') {
                        createDanmu(`You: ${message}`);
                        messageInput.value = "";
                    } else {
                        alert(data.message);
                    }
                });
        }
    });

    function createDanmu(message) {
        const danmu = document.createElement("div");
        danmu.className = "danmu-item";
        danmu.textContent = message;
        danmuContainer.appendChild(danmu);
    }

    function loadDanmu() {
        fetch("/get_messages")
            .then(response => response.json())
            .then(data => {
                data.messages.forEach(message => createDanmu(`${message.username}: ${message.message}`));
            });
    }

    loadDanmu();
});
