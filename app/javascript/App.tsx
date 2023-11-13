import * as React from "react"

const SSRBlock = (props: { html: string | null }) => {
  console.log("[SSRBlock] render", { props })

  return (
    <div
      data-rendered="server"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: props.html || "" }}
    />
  )
}

const ClientContent = (props) => {
  const [time, setTime] = React.useState("N/A")

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(() => {
        return new Date().toISOString()
      })
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  console.log("[ClientContent] render", { props, time })

  return <div data-rendered="client">{`Client Content: ${String(time)}`}</div>
}

export const App = (props: {
  // null if is SSR
  ssrContent: string | null
}) => {
  console.log("[App] render", { props })

  return (
    <main>
      <ClientContent />
      <SSRBlock html={props.ssrContent} />
      <p>hello both worlds!</p>
    </main>
  )
}
