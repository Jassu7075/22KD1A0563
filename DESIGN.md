## My Design Choices for the App

Here's a quick breakdown of how I built the URL shortener.

### Tech I Used

* **React (with Vite):** This was required for the test. I used Vite because it's fast to get started.
* **Material UI:** The prompt recommended this, so I used its `Button` and `TextField` components. It saved a lot of time on styling.
* **React Router:** I used this to handle the different pages: the main page (`/`), the stats page (`/stats`), and the redirects (`/:shortCode`).

### How I Saved the Data

I used `localStorage` to save all the links. This way, the data is still there even if you refresh the page. I stored everything as a list under a single key called `'links'`. Each link in the list is an object that looks like this:

```json
{
  "shortCode": "a2b4c6",
  "longUrl": "[https://www.google.com](https://www.google.com)",
  "createdAt": "2025-08-19T12:13:30.000Z"
}
