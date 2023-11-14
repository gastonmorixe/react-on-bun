// SERVER APP

import { Logger } from "./Logger"

let input = ""
for await (const chunk of Bun.stdin.stream()) {
  // chunk is Uint8Array
  // this converts it to text (assumes ASCII encoding)
  const chunkText = Buffer.from(chunk).toString()
  input += chunkText
  Logger.debug(`Chunk: ${chunkText}`)

  break
}

import {
  renderToString,
  // renderToReadableStream
} from "react-dom/server"

import { App } from "./App"

const ssrContent = input //"<p style='color: pink'>hello from BUN SSR!</p>"
const html = renderToString(<App ssrContent={ssrContent} />)

// TODO: Turn off prev console logs
// TODO: Always on server?

const ssrOutput = `//---S//${html}//---E//`
await Bun.write(Bun.stdout, ssrOutput)
