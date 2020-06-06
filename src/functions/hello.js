import fetch from "node-fetch"
// import Airtable from "airtable"

const API_ENDPOINT = "https://icanhazdadjoke.com/"

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT, { headers: { Accept: "application/json" } })
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: process.env.AT_BASE_ID,
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }))
}
