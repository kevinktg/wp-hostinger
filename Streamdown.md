---
title: "Streamdown"
source: "https://streamdown.ai/?ref=producthunt"
author:
published:
created: 2025-08-30
description: "A drop-in replacement for react-markdown, designed for AI-powered streaming."
tags:
  - "clippings"
---
[Vercel](https://vercel.com/)

/

Streamdown

A drop-in replacement for react-markdown, designed for AI-powered streaming.

```
npx ai-elements add response
```

or install it directly with `npm i streamdown`

## Overview

Formatting Markdown is easy, but when you tokenize and stream it, new challenges arise.

With [AI Elements](https://ai-sdk.dev/elements), we wanted a way to stream safe and perfectly formatted Markdown without having to worry about the details.

So we built Streamdown, a drop-in replacement for react-markdown, designed for AI-powered streaming.

It powers the AI Elements [Response](https://ai-sdk.dev/elements/components/response) component, but you can install it as a standalone package if you want.

```
'use client';

import { useChat } from '@ai-sdk/react';

import { useState } from 'react';

import { Response } from '@/components/ai-elements/response';

export default function Page() {

  const { messages, sendMessage, status } = useChat();

  const [input, setInput] = useState('');

  return (

    <>

      {messages.map(message => (

        <div key={message.id}>

          {message.parts.filter(part => part.type === 'text').map((part, index) => (

            <Response key={index}>{part.text}</Response>

          ))}

        </div>

      ))}

      <form

        onSubmit={e => {

          e.preventDefault();

          if (input.trim()) {

            sendMessage({ text: input });

            setInput('');

          }

        }}

      >

        <input

          value={input}

          onChange={e => setInput(e.target.value)}

          disabled={status !== 'ready'}

          placeholder="Say something..."

        />

        <button type="submit" disabled={status !== 'ready'}>

          Submit

        </button>

      </form>

    </>

  );

}
```

---

```
/*

 * Update your Tailwind globals.css to include the 

 * following code. This will ensure that the

 * Streamdown styles are applied to your project.

 * 

 * Make sure the path matches the location of the

 * node_modules folder in your project i.e.

 * @source "<path-to-node_modules>/node_modules/streamdown/dist/index.js";

 */

@source "../node_modules/streamdown/dist/index.js";
```

## Built-in typography styles

Streamdown comes with built-in Tailwind classes for common Markdown components — headings, lists, code blocks, and more.

With react-markdown

With Streamdown

## GitHub Flavored Markdown

Streamdown supports GitHub Flavored Markdown (GFM) out of the box, so you get things like task lists, tables, and more.

With react-markdown

With Streamdown

## Beautiful, interactive code blocks

Streamdown uses [Shiki](https://shiki.style/) to highlight code blocks, and comes with a copy button so you can easily copy the code.Hover to reveal the copy button!

With react-markdown

With Streamdown

## Mathematical Expressions

Streamdown supports LaTeX math expressions through remark-math and KaTeX, enabling beautiful mathematical notation in your markdown.

With react-markdown

With Streamdown

## Interactive Mermaid Diagrams

Streamdown supports Mermaid diagrams, streaming as code blocks with a button to render them.

With react-markdown

With Streamdown

## Style unterminated Markdown blocks

Streamdown comes with built-in support for parsing unterminated Markdown blocks (# headings, \`inline code\`, \*\*bold\*\*, \_italic\_, \[links\]() and more), which makes streaming Markdown content much prettier.

With react-markdown

With Streamdown

## Built-in security hardening

Streamdown ensures that untrusted markdown does not contain images from and links to unexpected origins which might have been [subject to prompt injection](https://vercel.com/blog/building-secure-ai-agents).

With react-markdown

With Streamdown

## Props

StreamdownProps extends the react-markdown component props with additional properties for streaming and security features.

All props are optional and have sensible defaults for typical use cases.

`children` `string`

The markdown content to render. Can be a string of markdown or React nodes.

`parseIncompleteMarkdown` `boolean`

Whether to parse and fix incomplete markdown syntax (e.g., unclosed code blocks or lists).

Default:`true`

`className` `string`

CSS class names to apply to the wrapper div element.

`components` `object`

Custom React components to use for rendering markdown elements (e.g., custom heading, paragraph, code block components).

`allowedImagePrefixes` `string[]`

Array of allowed URL prefixes for images. Use \["\*"\] to allow all images.

Default:`["*"]`

`allowedLinkPrefixes` `string[]`

Array of allowed URL prefixes for links. Use \["\*"\] to allow all links.

Default:`["*"]`

`defaultOrigin` `string`

Default origin to use for relative URLs in links and images.

`rehypePlugins` `array`

Array of rehype plugins to use for processing HTML. Includes KaTeX for math rendering by default.

Default:`[rehypeKatex]`

`remarkPlugins` `array`

Array of remark plugins to use for processing markdown. Includes GitHub Flavored Markdown and math support by default.

Default:`[remarkGfm, remarkMath]`

`shikiTheme` `[BundledTheme, BundledTheme] (from Shiki)`

The themes to use for code blocks. Defaults to \["github-light", "github-dark"\].

Default:`["github-light", "github-dark"]`

## Upgrade your AI-powered streaming

Try Streamdown today and take your AI-powered streaming to the next level.

```
npx ai-elements add response
```

## FAQ

Common questions about Streamdown and how it works with AI-powered streaming applications.