import fetch from "node-fetch";

const BASE_URL = process.env.NASA_API_URL || "https://api.nasa.gov";

async function getData(apiKey = process.env.NASA_API_KEY) {
  if (!apiKey) {
    throw new Error(
      "Missing NASA API key. Please set the NASA_API_KEY environment variable."
    );
  }

  try {
    const response = await fetch(
      encodeURI(`${BASE_URL}/planetary/apod?api_key=${apiKey}`)
    );

    if (!response.ok) {
      throw new Error(`Error fetching APOD data: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

async function getProperty(apiKey, property) {
  try {
    const data = await getData(apiKey);
    return data[property];
  } catch (error) {
    console.error(error);
    return null;
  }
}

const getCopyright = (apiKey) => getProperty(apiKey, "copyright");
const getDate = (apiKey) => getProperty(apiKey, "date");
const getExplanation = (apiKey) => getProperty(apiKey, "explanation");
const getHdurl = (apiKey) => getProperty(apiKey, "hdurl");
const getMediaType = (apiKey) => getProperty(apiKey, "media_type");
const getServiceVersion = (apiKey) => getProperty(apiKey, "service_version");
const getTitle = (apiKey) => getProperty(apiKey, "title");
const getImageUrl = (apiKey) => getProperty(apiKey, "url");

export {
  getData,
  getCopyright,
  getDate,
  getExplanation,
  getHdurl,
  getMediaType,
  getServiceVersion,
  getTitle,
  getImageUrl,
};
