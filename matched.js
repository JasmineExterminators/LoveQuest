let fullName = "Firstname Surname";
let biography = "This is my biography";
let school = "Carnegie Mellon University";
let year = 2028;
let zodiac = "leo";
let mbti = "INTJ"
let percentage = 78;


document.getElementById("fullName").textContent = fullName;
document.getElementById("bio").textContent = `Biography: ${biography}`;
document.getElementById("school").textContent = `🏫 ${school}`;
document.getElementById("year").textContent = `🎓 Class of ${year}`;
document.getElementById("zodiac").textContent = `♌ ${zodiac}`;
document.getElementById("mbti").textContent = `🧩 ${mbti}`;
document.getElementById("percentage").textContent = `💖${percentage}% Match`;

