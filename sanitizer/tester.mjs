const htmlRender = document.getElementById("rendered");
const c = await fetch("test_cases.txt")
let c_text = await c.text()
import { Sanitizer } from './sanitize.js'

let cleaned = Sanitizer.sanitize(c_text);

cleaned = "<script>function alert(text) { parent.postMessage('test') }</script>" + cleaned

console.log(cleaned)
htmlRender.setAttribute("srcdoc", cleaned);

window.addEventListener(
    "message",
    (event) => {
        if (event.origin !== window.location.origin) {
            return;
        }
        console.log(event)
    },
    false,
  );
  