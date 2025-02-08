function scrollLeft() {
    document.getElementById('scrollContainer').scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
}
function scrollRight() {
    document.getElementById('scrollContainer').scrollBy({ left: window.innerWidth, behavior: 'smooth' });
}
function addInterest() {
    let input = document.getElementById("interestInput");
let container = document.getElementById("interestsContainer");
if (input.value.trim() !== "") {
    let newInterest = document.createElement("span");
newInterest.className = "interest-item";
newInterest.textContent = input.value;
container.appendChild(newInterest);
input.value = "";
}
}