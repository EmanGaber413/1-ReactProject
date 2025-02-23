import { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";
import NewsCard from "../../parts/NewsCard";




export default function Home() {
  const {news}=useContext(CounterContext);
 
  console.log(news?.articles); 
return<>

{news&&news.map((newsItem)=>< NewsCard key={newsItem.id} newsItem={newsItem}/>)}
</>

}
