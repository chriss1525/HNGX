# API Endpoint

## Overview

This API endpoint provides information about a user's Slack name, the current day of the week, and the current UTC time in a specific format. 

The endpoint is designed to be a simple demonstration of retrieving and formatting this information.

## Endpoint Details

- **URL**: `/api/info`
- **HTTP Method**: GET

## Query Parameters

- `slack`: Your Slack username
- `track`: Your HNGX track.

## Response Format

The API response will be in JSON format and will include the following fields:

- `slack_name`: The Slack username or name provided in the query parameter.
- `current_day`: The current day of the week (e.g., "Monday").
- `utc_time`: The current UTC time in the format "2023-08-21T15:04:05Z."
- `track`: the track name provided in the query parameter.
- `github_file_url`: the github file with the api endpoint code.
- `github_repo_url`: this repository
- `status_code`: The HTTP status code, which will be "200" for a successful request.

## Example Usage

You can make a GET request to this endpoint by specifying the `slack` and `track` query parameters. Here's an example using cURL:

```bash
curl -X GET "http://100.25.0.75:3002/api/info?slack=your_slack_username&track=your_track_info"

