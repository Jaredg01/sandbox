// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
const goodDog = document.getElementById("submit-button");

function send() {
    const main = document.getElementsByTagName("main")[0];
    main.innerHTML = "";
    main.appendChild(document.createElement("p"));
    main.querySelector("p").innerHTML = "Thank you for your message!";
    main.querySelector("p").style.fontSize = '24px';
}

goodDog.addEventListener("click", send);
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

