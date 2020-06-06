import Airtable from "airtable"

const { AT_API_KEY, AT_BASE_ID } = process.env

exports.handler = async (event, context) => {
  return new Airtable({ apiKey: AT_API_KEY })
    .base(AT_BASE_ID)("Fruits & Vegetables")
    .create([
      {
        fields: {
          Title: "Zzzz",
          Code: 1234,
          Status: "Draft",
        },
      },
    ])
    .then(record => ({ statusCode: 200, body: record.id }))
    .catch(error => ({ statusCode: 422, body: String(error) }))
}
