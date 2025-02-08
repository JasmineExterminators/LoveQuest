document.addEventListener("DOMContentLoaded", async function () {
    try {
        // Load emoji data from emoji.json
        const response = await fetch("emoji.json");
        const emojiData = await response.json();

        function getRandomKey(obj) {
            const keys = Object.keys(obj);
            return keys[Math.floor(Math.random() * keys.length)];
        }

        // Randomly select attributes
        const randomHogwartsHouse = getRandomKey(emojiData.hogwarts_house);
        const randomZodiac = getRandomKey(emojiData.zodiac_sign);
        const randomMBTI = getRandomKey(emojiData.mbti);
        const randomIntroExtro = getRandomKey(emojiData.intro_extro_match);

        // Update the HTML with randomized selections
        document.getElementById("zodiac").innerHTML = 
            `${emojiData.zodiac_sign[randomZodiac]} Birthday (${randomZodiac.charAt(0).toUpperCase() + randomZodiac.slice(1)})`;
        
        document.getElementById("mbti").innerHTML = 
            `${emojiData.mbti[randomMBTI]} MBTI (${randomMBTI.toUpperCase()})`;

        document.querySelector(".compatibility ul").innerHTML = `
            <li>${emojiData.hogwarts_house[randomHogwartsHouse]} Both ${randomHogwartsHouse.charAt(0).toUpperCase() + randomHogwartsHouse.slice(1)}s</li>
            <li>${emojiData.zodiac_sign[randomZodiac]} Both ${randomZodiac.charAt(0).toUpperCase() + randomZodiac.slice(1)}s</li>
        `;

    } catch (error) {
        console.error("Error loading emoji data:", error);
    }
});
