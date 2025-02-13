class Sanitizer {
  static sanitize(input) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(`<body>${input}</body>`, "text/html");
    const body = doc.body;
    traverse(body);    traverse(body);
    return body.innerHTML;
  }
}


function traverse(node){          // Recursive function to traverse tree
  listAllowed = ["body", "p", "h1", "h2", "h3", "div", "b", "img", "title"]       
  if (listAllowed.includes(node.tagName.toLowerCase())){
    console.log(node);     
  }
  else{
    node.remove();
    return;
  }
  
  attributeDelete = ["onerror"];
  if (node.hasAttributes()) {
    for (const attr of node.attributes) {
      if (attributeDelete.includes(attr.name.toLowerCase())){
        node.remove();
      }
    }
  } 

  for (const child of [...node.children]){
    traverse(child);              // Recursive call
  }
}




// Ban: script, onerror, onimage (?), img

/* html testing input1 :
    <img src=x onerror=alert(1)>
    <script>alert(2)</script>
    <p>Allow me</p>
    <img src='https://lac.tf/_next/static/media/LongLogoWavingTransparentBig.3127a039.gif?imwidth=2048' width=100 />
    <h2>allow me as well</h2>
    <p style="color: red;">I should be red</p>
*/  

/* html testing input1 :
    <p>this is a p tag</p>
    <h1>this is an h1</h1>
    <div id="adsf">
        this is a div
        <b>
            this is a b
            <img src=x onerror='console.log("this onerror should be removed")'>
        </b>
        <script>console.log("this script should be removed");</script>
    </div>
*/

/* Notes 
    // for elements, nodeName is equal to tagNamme --> note: text not have tags, but have node name
    // .remove removes tags
    //childNodes vs children - returns just the tags of direct descendants
    //"in "loops through keys, "of" loops through values --> "of" is only for loops
    //The `Sanitizer.sanitize()` function takes in HTML as a string, and returns sanitized HTML as a string.
    // attr.name & node.attributes

*/ 


function traverse(node){          // Recursive function to traverse tree
  listAllowed = ["body", "p", "h1", "h2", "h3", "div", "b", "img", "title"]       
  if (listAllowed.includes(node.tagName.toLowerCase())){
    console.log(node);     
  }
  else{
    node.remove();
    return;
  }
  
  attributeDelete = ["onerror"];
  if (node.hasAttributes()) {
    for (const attr of node.attributes) {
      if (attributeDelete.includes(attr.name.toLowerCase())){
        node.remove();
      }
    }
  } 

  for (const child of [...node.children]){
    traverse(child);              // Recursive call
  }
}




// Ban: script, onerror, onimage (?), img

/* html testing input1 :
    <img src=x onerror=alert(1)>
    <script>alert(2)</script>
    <p>Allow me</p>
    <img src='https://lac.tf/_next/static/media/LongLogoWavingTransparentBig.3127a039.gif?imwidth=2048' width=100 />
    <h2>allow me as well</h2>
    <p style="color: red;">I should be red</p>
*/  

/* html testing input1 :
    <p>this is a p tag</p>
    <h1>this is an h1</h1>
    <div id="adsf">
        this is a div
        <b>
            this is a b
            <img src=x onerror='console.log("this onerror should be removed")'>
        </b>
        <script>console.log("this script should be removed");</script>
    </div>
*/

/* Notes 
    // for elements, nodeName is equal to tagNamme --> note: text not have tags, but have node name
    // .remove removes tags
    //childNodes vs children - returns just the tags of direct descendants
    //"in "loops through keys, "of" loops through values --> "of" is only for loops
    //The `Sanitizer.sanitize()` function takes in HTML as a string, and returns sanitized HTML as a string.
    // attr.name & node.attributes

*/ 

function traverse(node){          // Recursive function to traverse tree
  listAllowed = ["body", "p", "h1", "h2", "h3", "div", "b", "img"]       
  if (listAllowed.includes(node.tagName.toLowerCase())){
    console.log(node);     
  }
  else{
    node.remove();
    return;
  }
  
  attributeDelete = ["onerror"];
  if (node.hasAttributes()) {
    for (const attr of node.attributes) {
      if (attributeDelete.includes(attr.name.toLowerCase())){
        node.remove();
      }
    }
  } 

  for (const child of [...node.children]){
    traverse(child);              // Recursive call
  }
}


// Ban: script, onerror, onimage (?), img

/* html testing input1 :
    <img src=x onerror=alert(1)>
    <script>alert(2)</script>
    <p>Allow me</p>
    <img src='https://lac.tf/_next/static/media/LongLogoWavingTransparentBig.3127a039.gif?imwidth=2048' width=100 />
    <h2>allow me as well</h2>
    <p style="color: red;">I should be red</p>
*/  

/* html testing input1 :
    <p>this is a p tag</p>
    <h1>this is an h1</h1>
    <div id="adsf">
        this is a div
        <b>
            this is a b
            <img src=x onerror='console.log("this onerror should be removed")'>
        </b>
        <script>console.log("this script should be removed");</script>
    </div>
*/

/* Notes 
    // for elements, nodeName is equal to tagNamme --> note: text not have tags, but have node name
    // .remove removes tags
    //childNodes vs children - returns just the tags of direct descendants
    //"in "loops through keys, "of" loops through values --> "of" is only for loops
    //The `Sanitizer.sanitize()` function takes in HTML as a string, and returns sanitized HTML as a string.
    // attr.name & node.attributes

*/