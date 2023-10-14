const Airtable = require("airtable");
// patJpBF2CPBjnX75H.b321a8d5405c5d7dde558a7205813febfaa191f377d2b20fa5f79f1962497660

const ENDPOINT_URL = "https://api.airtable.com";
const AirtabelConfig = async () => {
  const API_KEY =
    "patJpBF2CPBjnX75H.b321a8d5405c5d7dde558a7205813febfaa191f377d2b20fa5f79f1962497660";
  const BASE_ID = "appS1WrgUzNAbnP2q";

  Airtable.configure({
    endpointUrl: ENDPOINT_URL,
    apiKey: API_KEY,
  });
  return Airtable.base(BASE_ID);
};

export const FetchData = async (setRes) => {
  const base = await AirtabelConfig();
  try {
    const res = await base.table("Table 1").select({}).all();

    setRes(res);
  } catch (err) {
    console.log(err);
  }
};

// $ export AIRTABLE_API_KEY=YOUR_SECRET_API_TOKEN

// # Node:
// const base = require('airtable').base('appS1WrgUzNAbnP2q');
// EXAMPLE USING CUSTOM CONFIGURATION
// var Airtable = require('airtable');
// Airtable.configure({
//     endpointUrl: 'https://api.airtable.com',
//     apiKey: 'YOUR_SECRET_API_TOKEN'
// });
// var base = Airtable.base('appS1WrgUzNAbnP2q');
