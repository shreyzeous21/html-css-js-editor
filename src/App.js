import React, { useState, useEffect } from "react";
import "./App.css";
import Editor from "./components/Editor";
import useLocalStorage from "./hooks/useLocalStorage";
function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
            <html>
              <body>${html}</body>
              <style>${css}</style>
              <script>${js}</script>
            </html>`);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div className="app">
      <div className="app__header">
        <div className="app__logo">
          <img src="https://i.imgur.com/vGVAieX.png" alt="logo" />
          <h3>
            Code-with
            <br />
            Shrey
          </h3>
        </div>
      </div>
      <div className="app__pane app__topPane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="Javascript"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="app__outputPane">
        <div className="app__outputTitle">OUTPUT</div>
        <iframe
          srcDoc={srcDoc}
          title="output"
          frameBorder="0"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
          className="app__iframe"
        />
      </div>
    </div>
  );
}

export default App;
