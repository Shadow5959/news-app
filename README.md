# News App

This is a React-based News App that fetches and displays the latest news articles from various categories using the News API. The app allows users to navigate through different news categories and paginate through articles.

## Features

- **Category-based News**: Browse news articles by categories such as Business, Entertainment, Health, Science, Sports, and Technology.
- **Pagination**: Navigate through pages of articles using "Previous" and "Next" buttons.
- **Dynamic Titles**: The page title updates dynamically based on the selected news category.
- **Loading Spinner**: Displays a spinner while fetching data from the API.
- **Responsive Design**: The app is built using Bootstrap for a responsive and user-friendly interface.

## Folder Structure

```
news-app/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── NavBar.js
│   │   ├── News.js
│   │   ├── NewsItem.js
│   │   └── Spinner.js
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package.json
├── README.md
└── sampleOutput.json
```

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/news-app.git
   cd news-app
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Start the app:**
   ```bash
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

## Components

### NavBar
Displays the navigation bar with links to different news categories.

### News
Fetches and displays news articles based on the selected category. Handles pagination and updates the page title dynamically.

### NewsItem
Displays individual news articles with details such as title, description, image, author, and publication date.

### Spinner
Displays a loading spinner while data is being fetched.

## API Integration

The app uses the News API to fetch news articles. Replace the `apikey` in the `News.js` file with your own API key:
```jsx
let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=YOUR_API_KEY&page=${this.state.page}&pagesize=${this.props.pageSize}`;
```

## Scripts

- **npm start**: Runs the app in development mode.
- **npm test**: Launches the test runner.
- **npm run build**: Builds the app for production.
- **npm run eject**: Ejects the app configuration.

## Dependencies

- **React**
- **React Router DOM**
- **Bootstrap**
- **PropTypes**

