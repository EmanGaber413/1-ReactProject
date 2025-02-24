
import { createContext, useState ,useEffect} from "react";
import PropTypes from "prop-types";
import { axiosinstance } from "../../apiaxios/Apiaxios";


export const CounterContext = createContext([]);
export function CounterContextProvider(props) {
    const [news,setNews] = useState([]);

    useEffect(()=>{
        axiosinstance.get("top-headlines?country=us")
        .then((res)=>res.data)
        .then((news)=>
            setNews(news.articles))
    },[]);
    return <CounterContext.Provider value={{ news }}>
        {props.children}
    </CounterContext.Provider>
}
CounterContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};