import React, { useState } from 'react'
import "./Markdown.css"
import Markdown from 'react-markdown'

const defaultText = `
# H1 Header
## H2 Header
[Here's a link](https://www.example.com)

\`Here's inline code\`
> Let's add a blockquote here.
- First list item
- Second list item
- Third list item
~~~
Here's a code block below 

function doSomething() {
  return nothing;
}

  Code block end
~~~
**We got some bold text here, followed by an image:**

![pic](https://mazwai.com/videvo_files/video/free/2016-12/thumbnails/Hack_code_greenonblack_01_Videvo_small.jpg)
`

const MarkdownPre = () => {

    const [markdown, setMarkdown] = useState(defaultText)

    return (
    <div>
        <section id="editsection">
            
            <div id="editor-top">Editor</div>
            <textarea id="editor" value={markdown} onChange={e => setMarkdown(e.target.value)}/>
        </section>
        <section id="previewsection">
            <div id="preview-top">Preview</div>
            <div id="preview"><Markdown>{markdown}</Markdown></div>
        </section>
    </div>
    )
}

export default MarkdownPre