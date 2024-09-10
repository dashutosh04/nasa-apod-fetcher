##  🚀 NASA APOD Data Fetcher

### 📝 Description

This `Node.js` project provides a set of functions to fetch data from *NASA's Astronomy Picture of the Day (APOD)* API. It allows you to easily retrieve information about the daily featured image, including its copyright, date, explanation, media type, and more.

### 💫 Features

- Fetches complete APOD data using your NASA API key.
- Extracts specific properties like copyright, date, explanation, HD URL, media type, service version, title, and image URL.
- Handles errors gracefully by logging them and returning default values for missing data.
- Improved Security: Explicitly checks for missing API keys and throws informative errors.

### 💻 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/dashutosh04/nasa-apod.git
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set NASA API Key:**

You'll need a NASA API key. Obtain one from https://api.nasa.gov/ and set it as an environment variable named `NASA_API_KEY`.

### ✒️ Usage

#### Import the functions:

```js
import {
  getData,
  getCopyright,
  getDate,
  getExplanation,
  getHdurl,
  getMediaType,
  getServiceVersion,
  getTitle,
  getImageUrl,
} from "./index.js"; // imports all the functions;
```
```js
import * as APOD from "./index.js"; // imports all the functions;
```

### Example usage:

```JavaScript
const apiKey = process.env.NASA_API_KEY;

getCopyright(apiKey)
.then(copyright => console.log("Copyright:", copyright))
.catch(error => console.error(error));

getDate(apiKey)
.then(date => console.log("Date:", date))
.catch(error => console.error(error));

```

### 🤝 Contributing

Feel free to submit pull requests or issues on GitHub!

### License

MIT License

#### Additional Information

- The `BASE_URL` for the API is set using an environment variable (NASA_API_URL) for security reasons. If not provided, it defaults to the public API URL.
- The code is well-structured with modular functions for each property retrieval.
- Error handling ensures the code gracefully handles potential issues during API calls.
- It now includes improved security by explicitly checking for a missing API key and throwing an informative error message to guide users on setting it up.
