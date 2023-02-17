import { useState } from "react";
import GlobalArticles from "./GlobalArticles";
export default function Home() {

  const[globalData, setGlobalData] = useState([]);
 const handleGlobalArticle = async () => {
  let response = await fetch(`https://api.realworld.io/api/articles` , {
});

  let responseData = await response.json();
  console.log("global article", responseData);
  setGlobalData(responseData.articles);
  console.log("global article", globalData);

 }

  return (
    <div className="home">
      <div className="bg-[#5CB85C]">
        <h3>Conduit</h3>
        <p>A place to share your knowledge</p>
      </div>
      <div>
        <ul>
          <li onClick={handleGlobalArticle}>Global Articles</li>
        </ul>
      </div>
      <div>
        <GlobalArticles globalData={globalData}/>
      </div>
    </div>
  );
}