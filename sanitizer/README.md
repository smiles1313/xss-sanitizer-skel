# XSS Sanitizer
This is a simple website to provide an interactive frontend to test your XSS sanitizer.

## Running
You should be able to use any static file HTTP server. If you have python installed, you can run `python3 -m http.server 8080` and then open the page in your browser at http://localhost:8080. You can also use VSCode's Live Server extension.

## Developing
Edit the sanitizer at `sanitize.js`. The `Sanitizer.sanitize()` function takes in HTML as a string, and returns sanitized HTML as a string.
