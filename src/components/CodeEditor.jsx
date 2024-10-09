import MonacoEditor from "@monaco-editor/react"; // Change this line

const CodeEditor = ({ language, value, onChange }) => {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "4px" }}>
      <h2 style={{ textAlign: "center" }}>{language.toUpperCase()} Editor</h2>
      <MonacoEditor
        height="300px"
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
