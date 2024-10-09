const Preview = ({ html, css, js }) => {
  const code = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
    </html>
    `;
  return (
    <iframe
      srcDoc={code}
      title="preview"
      style={{
        width: "100%",
        height: "300px",
        border: "1px solid #ddd",
        borderRadius: "4px",
      }}
    />
  );
};

export default Preview;
