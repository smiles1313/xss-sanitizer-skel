const htmlRender = document.getElementById("rendered");
const c = await fetch("test_cases.txt")
<<<<<<< Updated upstream
let c_text = await c.text()
import { Sanitizer } from './sanitize.js'

const cleaned = Sanitizer.sanitize(c_text);

c_text = "<script>function alert(text) { parent.postMessage('test') }</script>" + c_text

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
  
=======
const c_text = await c.text()


const cleaned = Sanitizer.sanitize(c_text);

console.log(cleaned)
htmlRender.setAttribute("srcdoc", cleaned);
>>>>>>> Stashed changes
