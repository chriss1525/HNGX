// api endpoint thaat takes two Get request parameters and returns a json

const express = require('express');
const app = express();
const port = 3002;

app.use(express.json());

// Handle GET requests
app.get('/api/info', (req, res) => {
  try {
    const slack = req.query.slack;
    const track = req.query.track;

    // get current UTC time
    const date = new Date(); 

    // get current day of the week
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[date.getDay()];

    // construct response object
    const response = {
      slack_name: slack,
      current_day: day,
      utc_time: date.toISOString(),
      track: track,
      github_file_url: 'https://github.com/chriss1525/HNGX/blob/master/stage_1/app.js',
      github_repo_url: 'https://github.com/chriss1525/HNGX',
      "status_code": "200", 
    };

    // set content type to json
    res.setHeader('Content-Type', 'application/json');

    // send response object
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json('Invalid request');
  }
});

app.listen(port, () => {
  console.log(`server is running on port:${port}`);
});

