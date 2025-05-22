import { useState, useRef, useEffect } from "react"
import "./App.css"
import BackgroundMusic from "./components/BackgroundMusic"
import quotes from "./data/quotes.json"
import ring from "./assets/ring_inscription.png"

function App() {
  const ringRef = useRef(null)

  const starterQuote = {
    quote: "Embrace some wisdom and carry on",
    character: "Gandelf",
    context: "This is the context",
  }

  const [quote, setQuote] = useState({
    quote: "Embrace some Tolkien Wisdom",
    character: "This will display the character name",
    context: "This will give you the context of the quote",
  })

  function getRandomQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

    var newQuote = {
      quote: randomQuote.quote,
      character: randomQuote.character,
      context: randomQuote.context,
    }

    setQuote(newQuote)
  }

  function triggerGlow() {
    const element = ringRef.current
    if (!element) return

    element.classList.add("glow")

    // Remove the class after 2 seconds
    setTimeout(() => {
      element.classList.remove("glow")
    }, 2000)
  }

  return (
    <>
      <div className="ring-container">
        <img
          ref={ringRef}
          src={ring}
          className="ring logo"
          alt="lotr ring inscription"
        />
      </div>
      <div className="container">
        <h1 className="quote">{quote.quote}</h1>
        <h3>
          <span id="character">{quote.character}</span>
          <span> | </span>
          <span id="context">{quote.context}</span>
        </h3>
      </div>

      <div className="container">
        <div className="button-wrapper">
          <button
            onClick={() => {
              getRandomQuote()
              triggerGlow()
            }}
            style={{ marginRight: "1rem" }}
          >
            Embrace Wisdom
          </button>
          <BackgroundMusic />
        </div>
        <p>
          Created by{" "}
          <a href="https://keelanjon.com" target="_blank">
            KeelanJon
          </a>
        </p>
      </div>
    </>
  )
}

export default App
