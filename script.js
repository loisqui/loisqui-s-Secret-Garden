// script.js

document.addEventListener("DOMContentLoaded", function () {
    // 弹幕效果
    function createDanmu(message) {
        const danmuContainer = document.getElementById("danmu-container");
        const danmu = document.createElement("div");
        danmu.className = "danmu-item";
        danmu.textContent = message;
        danmuContainer.appendChild(danmu);
    }

    // 提交留言
    document.getElementById("submit-message").addEventListener("click", function () {
        const messageInput = document.getElementById("message-input");
        const message = messageInput.value.trim();

        if (message !== "") {
            // 发送留言数据到后端
            fetch("/post_message", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: message }),
            })
                .then(response => response.json())
                .then(data => {
                    // 处理后端返回的数据
                    if (data.status === 'success') {
                        // 渲染弹幕
                        createDanmu(`You: ${message}`);
                        // 清空输入框
                        messageInput.value = "";
                    } else {
                        // 处理留言包含敏感词的情况
                        alert(data.message);
                    }
                });
        }
    });

    // 加载弹幕
    function loadDanmu() {
        // 获取弹幕数据
        fetch("/get_messages")
            .then(response => response.json())
            .then(data => {
                // 渲染弹幕
                data.messages.forEach(message => createDanmu(`${message.username}: ${message.message}`));
            });
    }

    // 在页面加载时加载弹幕数据
    loadDanmu();

    // 倒计时更新
    function updateCountdownTimer(countdown) {
        const countdownTimer = document.getElementById("countdown-timer");

        if (countdown > 0) {
            const days = Math.floor(countdown / (24 * 60 * 60));
            const hours = Math.floor((countdown % (24 * 60 * 60)) / (60 * 60));
            const minutes = Math.floor((countdown % (60 * 60)) / 60);
            const seconds = countdown % 60;

            countdownTimer.textContent = `Time Left: ${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            countdownTimer.textContent = "Happy New Year!";
        }
    }

    // 更新倒计时
    function updateCountdown() {
        const currentTimestamp = Math.floor(Date.now() / 1000);
        const newYearTimestamp = 1640995200; // 2024 年 1 月 1 日 00:00:00 UTC
        const countdown = Math.max(0, newYearTimestamp - currentTimestamp);

        updateCountdownTimer(countdown);
    }

    // 在页面加载时启动倒计时更新
    updateCountdown();
    setInterval(updateCountdown, 10000000000); // 每秒更新一次
});
