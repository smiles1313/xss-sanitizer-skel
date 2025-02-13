const htmlRender = document.getElementById("rendered");
const c = await fetch("test_cases.txt")
const c_text = await c.text()
console.log(c_text)
htmlRender.setAttribute("srcdoc", c_text);
