import { useState } from "react";
import './App.css'
function App() {
  const quotes = [
    "Knowledge enlivens the soul.",
    "The most complete gift of God is a life based on knowledge.",
    "The mind of a wise man is the safest custody of secrets.",
    "To fight against one's desires is the greatest of all fights.",
    "He who has a thousand friends has not a friend to spare, and he who has one enemy will meet him everywhere.",
    "The most complete gift of God is a life based on knowledge.",
    "He who cannot benefit by patience will die of grief.",
    "Silence is the best reply to a fool.",
    "Humbleness enforces love and friendship.",
    "Knowledge enlivens the soul.",
    "The disease of the heart is worse than the disease of the body.",
    "He who has a thousand friends has not a friend to spare, and he who has one enemy will meet him everywhere.",
    "When you gain power over your adversary, pardon him by way of thanks for being able to overpower him.",
    "There is no greater wealth than wisdom, no greater poverty than ignorance, no greater heritage than culture and no greater support than consultation.",
    "Patience is of two kinds: patience over what pains you, and patience against what you covet.",
    "He who is greedy is disgraced; he who discloses his hardship will always be humiliated.",
    "A fool’s mind is at the mercy of his tongue and a wise man’s tongue is under the control of his mind.",
    "He who has no control over his temper has no control over his mind.",
    "The best form of devotion to the service of Allah is not to make a show of it.",
    "The best deed of a great man is to forgive and forget.",
    "He who does not have respect for himself will not have respect for others.",
    "The best form of piety is to abstain from asking anything from anyone.",
    "A fool's mind is at the mercy of his tongue and a wise man's tongue is under the control of his mind.",
    "People are slaves to this world, and as long as they live favorable and comfortable lives, they are loyal to religious principles.",
    "He who does not have respect for himself will not have respect for others.",
    "If a man wants to live a long life, he should serve his relatives.",
    "One who seeks advice learns to recognize mistakes.",
    "He who praises you murders you.",
    "People are slaves to this world, and as long as they live favorable and comfortable lives, they are loyal to religious principles.",
    "How foolish is man! He ruins the present while worrying about the future, but weeps in the future by recalling his past.",
    "A fool’s mind is at the mercy of his tongue and a wise man’s tongue is under the control of his mind.",
    "He who has no control over his temper has no control over his mind.",
    "Do not be a slave to others when Allah has created you free.",
    "The disease of the heart is worse than the disease of the body.",
    "A fool's mind is at the mercy of his tongue and a wise man's tongue is under the control of his mind.",
    "When you gain power over your adversary, pardon him by way of thanks for being able to overpower him.",
    "One who seeks advice learns to recognize mistakes.",
    "He who praises you murders you.",
    "Do not be a slave to others when Allah has created you free.",
    "The most complete gift of God is a life based on knowledge.",
    "Humbleness enforces love and friendship.",
    "Knowledge enlivens the soul.",
    "People are slaves to this world, and as long as they live favorable and comfortable lives, they are loyal to religious principles.",
    "The best form of devotion to the service of Allah is not to make a show of it.",
    "The best deed of a great man is to forgive and forget.",
    "One who seeks advice learns to recognize mistakes.",
    "How foolish is man! He ruins the present while worrying about the future, but weeps in the future by recalling his past.",
    "He who cannot benefit by patience will die of grief.",
    "Patience is of two kinds: patience over what pains you, and patience against what you covet."
];

  const [quote, setRandomQuote] = useState(["Hazrat Ali (R.A) Quotes"])

  const handleQuote = () => {
    let randomNumber = Math.round(Math.random() * quotes.length-1);
    setRandomQuote(quotes[randomNumber])
  }

  return (
    <>
      <div className="container">
        <div className="quote">
        <h2>"{quote}"</h2>
        </div>
        <button onClick={handleQuote}>Generate Quote</button>
      </div>
    </>
  )
}
export default App;