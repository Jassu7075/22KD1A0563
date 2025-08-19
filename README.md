## URL Shortener App - Affordmed Test

**Name:** Jakkam Jaswanth Kumar
**Roll Number:** 22KD1A0563

This is my submission for the frontend test. It's a URL shortener app built with React that saves all the data in the browser.

### A Quick Note on the Logger

The instructions mentioned a logging server, but I didn't have the `clientID` or `accessCode` to connect to it.

To work around this, I made a "mock" logger in the `logger.js` file. It has the same functions the real one would, but it just prints everything to the browser console instead of sending it to a server. This allowed me to build the rest of the application exactly as requested.

### What it Does

* Lets you shorten a long URL and gives you a new link.
* Saves all your links in the browser using `localStorage`.
* Has a "Statistics" page where you can see all the links you've made.
* The short links actually work - clicking one will redirect you to the original long URL.

### How to Run It

1.  Go into the `Frontend Test Submission` folder.
2.  Run `npm install`.
3.  Run `npm run dev`.
4.  Open the local URL it gives you in your browser.
