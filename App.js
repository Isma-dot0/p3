import React, { useState } from "react";
import { marked } from "marked";
import "./App.css";

const App = () => {
  const [markdown, setMarkdown] = useState(`# Heading 1
## Subheading
[Link](https://freecodecamp.org)
\`Inline Code\`
\`\`\`
Code Block
\`\`\`
- List Item
> Blockquote

![Image](https://via.placeholder.com/150)

**Bold Text**`);

  // Configure Marked options
  marked.setOptions({
    breaks: true, // Optional bonus for carriage returns
  });

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <div className="container">
        <textarea
          id="editor"
          value={markdown}
          onChange={handleChange}
        />
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(markdown),
          }}
        />
      </div>
    </div>
  );
};

export default App;
