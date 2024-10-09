import MonacoEditor from "@monaco-editor/react";

const CodeEditor = ({ language, value, onChange }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "4px",
        marginBottom: "10px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>{language.toUpperCase()} Editor</h2>
      <MonacoEditor
        height="200px" // Set height here to fit in the viewport
        language={language}
        value={value}
        onChange={onChange}
        options={{
          selectOnLineNumbers: true,
          automaticLayout: true,
        }}
        theme="vs-dark"
      />
    </div>
  );
};

export default CodeEditor;
