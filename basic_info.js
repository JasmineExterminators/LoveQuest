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

document.getElementById('basicInfoForm').addEventListener('submitInfo', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the input values
    const name = document.getElementById('name').value;
    const school = document.getElementById('school').value;
    const major = document.getElementById('major').value;
    const bday = document.getElementById('bday').value;


    // Log the values to the console (or handle them as needed)
    console.log('Name:', name);
    console.log('School:', school);
    console.log('major:', major);
    console.log('bday:', bday);


    // Send the data to your server using fetch
    fetch('http://localhost:5500/submitInfo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, school, major, bday })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
});


