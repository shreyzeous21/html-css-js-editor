import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

function Editor({ language, displayName, value, onChange }) {
  const [open, setOpen] = useState(true);
  return (
    <div className={`editor ${open ? "" : "app__collapsed"}`}>
      <div className="editor__title">
        {displayName}
        <button
          className="editor__expandCollapseButton"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={(editor, data, value) => {
          onChange(value);
        }}
        value={value}
        className="editor__codeMirrorWrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: "material",
        }}
      />
    </div>
  );
}

export default Editor;
