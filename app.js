
const api_url = "https://randomuser.me/api/"

async function getPerson(){
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);

    const { name, gender, dob, email, location } = data.results[0];
    const { title, first, last } = data.results[0].name;
    const { country } = data.results[0].location;
    const {age} = data.results[0].dob;

    console.log(name);
    console.log(gender);
    console.log(country);
    console.log(age);
    console.log(email);
    
    const fullName = `${title} ${first} ${last}`;

    document.getElementById("name").textContent = "Name: " + fullName;
    document.getElementById("gender").textContent = "Gender: " + gender;
    document.getElementById("country").textContent = "Country: " + country;
    document.getElementById("dob").textContent = "Age: " + age;
    document.getElementById("email").textContent = "Email: " + email;

}

getPerson();