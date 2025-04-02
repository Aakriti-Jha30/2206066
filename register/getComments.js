import fetch from "node-fetch";

const testApi = async () => {
  const response = await fetch("http://20.244.56.144/evaluation-service/posts/589/comments", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzNjAxMzMyLCJpYXQiOjE3NDM2MDEwMzIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImUxYjU2NTExLTMwZjAtNDUzZS1iYmE5LTc2NGRhYzU1ZDAzOSIsInN1YiI6ImFha3JpdGpoYTg5MEBnbWFpbC5jb20ifSwiZW1haWwiOiJhYWtyaXRqaGE4OTBAZ21haWwuY29tIiwibmFtZSI6ImFha3JpdGkgamhhIiwicm9sbE5vIjoiMjIwNjA2NiIsImFjY2Vzc0NvZGUiOiJud3B3cloiLCJjbGllbnRJRCI6ImUxYjU2NTExLTMwZjAtNDUzZS1iYmE5LTc2NGRhYzU1ZDAzOSIsImNsaWVudFNlY3JldCI6IkFqd1FORE5ReGdmRFNKTlEifQ.djdtlkg3oXCNFmL3kuEKb7zruVM95u5QkQBiiOg37HU",
    },
  });

  const data = await response.json();
  console.log("API Response:", data);
};

testApi().catch(console.error);