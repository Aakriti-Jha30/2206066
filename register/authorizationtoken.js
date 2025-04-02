import fetch from "node-fetch";

const data = {
 "email":"aakritjha890@gmail.com",
 "name":"Aakriti Jha",
 "rollNo":"2206066",
 "accessCode":"nwpwrZ",
 "clientID":"e1b56511-30f0-453e-bba9-764dac55d039",
 "clientSecret":"AjwQNDNQxgfDSJNQ",
};

fetch("http://20.244.56.144/evaluation-service/auth", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((result) => console.log("Response:", result))
  .catch((error) => console.error("Error:", error));