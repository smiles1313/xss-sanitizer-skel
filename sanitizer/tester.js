import { Sanitizer } from "./sanitize.js";

const casesDiv = document.getElementById("cases");
const rendersDiv = document.getElementById("renders");

export class Tester {
  // lookup table for testcase -> HTML element
  displayLookup = new Map();

  constructor() {
    window.addEventListener(
      "message",
      (event) => {
        const id = event.data;
        const display = this.displayLookup.get(id);
        // TODO: Mark the test case as failing, maybe via color styles or text changes
        console.log(id);
        if (display){
          display.style.backgroundColor = "red";
        }
      },
      false
    );
  }

  // display a test case, generate a new ID for it, and return its ID
  displayCase(payload, cleaned) {
    const id = crypto.randomUUID();
    // TODO: create an element to display the test case result
    // Use the payload and cleaned string variables to display the string pre- and post- sanitization
    const display = document.createElement("pre")
    display.innerText = "Payload: " + payload + "\n" + "Cleaned: " + cleaned;
    casesDiv.appendChild(display);

    // TODO: Append test case result div with casesDiv.appendChild()
    // casesDiv.appendChild(testCaseElement);
    this.displayLookup.set(id, display);
    return id;
  }

  // test one test case
  testOne(payload) {
    let cleaned = Sanitizer.sanitize(payload);
    const id = this.displayCase(payload, cleaned);
    // If alert() is called by our code, post message to ent with test case ID number
    cleaned =
      `<script>function alert(text) { parent.postMessage(${JSON.stringify(
        id
      )}, ${JSON.stringify(location.origin)}); }</script>` + cleaned;
    // Test the payload
    // TODO: Create an iframe, set the srcdoc attribute to the html you want to render, and then render it by appending to the rendersDiv
    const frame = document.createElement("iframe");
    frame.setAttribute("srcdoc", cleaned);
    rendersDiv.appendChild(frame);
  }
}


// Note to self: 
//      TODO - Finish TODOs in this file.
//             Change attributes in sanitizer.js to a whitelist (instead of a blacklist).
