async function fetchUser() {
    let response = await fetch("https://randomuser.me/api");
    let data = await response.json();

    let userDetails = data.results;
    let random = Math.floor(Math.random()*userDetails.length);
    let user = userDetails[random];

    let fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
    let gender = user.gender;
    let email = user.email;
    let address = `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country} - ${user.location.postcode}`;
    
    document.getElementById('name').innerText = `Name: ${fullName}`;
    document.getElementById('gender').innerText = `Gender: ${gender}`;
    document.getElementById('address').innerText = `Address: ${address}`;
    document.getElementById('email').innerText = `Email: ${email}`;
}

fetchUser();