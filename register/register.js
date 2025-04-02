import fetch from "node-fetch";

const data = {
 "email":"aakritjha890@gmail.com",
 "name":"Aakriti Jha",
 "mobileNo":"9654721969",
 "githubUsername":"Aakriti-Jha30",
 "rollNo":"2206066",
 "collegeName":"Kalinga Institute Of Industrial Technology",
 "accessCode":"nwpwrZ"
};

fetch("http://20.244.56.144/evaluation-service/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((result) => console.log("Response:", result))
  .catch((error) => console.error("Error:", error));
