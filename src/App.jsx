// src/App.jsx
import { useState } from "react";
import CodeEditor from "./components/CodeEditor";

const App = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Frontend Code Editor</h1>
      <CodeEditor language="html" value={html} onChange={setHtml} />
      <CodeEditor language="css" value={css} onChange={setCss} />
      <CodeEditor language="javascript" value={js} onChange={setJs} />
    </div>
  );
};

export default App;
