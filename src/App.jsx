// src/App.jsx
import { useState } from "react";
import { saveAs } from "file-saver";
import CodeEditor from "./components/CodeEditor";
import Preview from "./components/Preview";

const App = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  // function to save code as a file
  const saveFile = (filename, content) => {
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    saveAs(blob, filename);
  };

  // function to handle saving HTML, CSS, and JS files
  const handleSave = () => {
    saveFile("index.html", html);
    saveFile("style.css", css);
    saveFile("script.js", js);
  };

  // Function to load files
  const handleLoad = async (event) => {
    const file = event.target.files[0];
    const text = await file.text();
    setHtml(text);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Frontend Code Editor</h1>
      <CodeEditor language="html" value={html} onChange={setHtml} />
      <CodeEditor language="css" value={css} onChange={setCss} />
      <CodeEditor language="javascript" value={js} onChange={setJs} />

      <h2>Preview</h2>
      <Preview html={html} css={css} js={js} />

      <div style={{ marginTop: "20px" }}>
        <button onClick={handleSave}>Save Code</button>
        <input
          type="file"
          onChange={handleLoad}
          style={{ marginLeft: "10px" }}
        />
      </div>
    </div>
  );
};

export default App;
