"use client";
import React, { useEffect, useRef } from "react";

import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Copy } from "lucide-react";

function Output({ output = "", loading }) {
  const editorRef = useRef();

  // Update editor content when output changes
  useEffect(() => {
    if (editorRef.current && output) {
      editorRef.current.getInstance().setMarkdown(output);
    }
  }, [output]);

  // Copy content to clipboard
  const handleCopy = () => {
    if (editorRef.current) {
      const content = editorRef.current.getInstance().getMarkdown();
      navigator.clipboard.writeText(content);
    }
  };

  return (
    <div className="bg-white">
      <div className="flex gap-10 mb-3 justify-between">
        <h2 className="font-bold text-xl p-3">Your Results</h2>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 p-3 border-2 bg-gray-400 hover:cursor-pointer rounded-xl"
        >
          <Copy size={18} />
          Copy
        </button>
      </div>

      <Editor
        ref={editorRef}
        initialValue=""
        previewStyle="vertical"
        height="500px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
      />
    </div>
  );
}

export default Output;
