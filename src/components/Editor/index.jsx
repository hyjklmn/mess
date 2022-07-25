import React, { Component } from "react";
import Editor from "@monaco-editor/react";
export default class index extends Component {
  render() {
    return (
      <div>
        <Editor
          theme="vs-dark"
          height="90vh"
          defaultLanguage="javascript"
          defaultValue="// some comment"
        />
      </div>
    );
  }
}
