import Header from "./components/header/Header.tsx" 
import "./app.css"
import NewsCard from "./components/news-card/NewsCard.tsx"

function App() {
  return (
    <div className="w-['100%'] h-['100%'] bg-[#1a1a32]">
      <Header />
      <hr className="border-t border-gray-700 my-6 mx-auto w-[90vw]" />
      <div className="flex flex-row flex-wrap justify-center pb-6 gap-y-6 mx-auto max-w-6xl">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  )
}

export default App
