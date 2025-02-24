/* eslint-disable react/prop-types */
import { faCodepen, faFlipboard, faBattleNet } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



 
export default function NewsCard({newsItem}) {
   
  const{urlToImage,title,description,author,source,url}= newsItem;
  return <>
  
  <div className='news'>
      <div>
<img src={urlToImage} alt={title} />
      </div>
      <div>
<h2>
{title}
</h2>
<p>{description}</p>
      </div>
      <div className="d-flex px-3 gap-3 bg-dark-subtle ">
        <h3 className="fs-5"><FontAwesomeIcon icon={faCodepen} className="me-2 
        // eslint-disable-next-line react/jsx-no-comment-textnodes, react/jsx-no-comment-textnodes
        "/> auther:{author??"N/A"}</h3>

        <h3 className="fs-5"><FontAwesomeIcon icon={faFlipboard} className="me-2"/>source:{source.name}</h3>
        <h3 className="fs-5"><FontAwesomeIcon icon={faBattleNet} className="me-2"/>
        <a href={url} target="_blank" rel="noopener noreferrer">View</a></h3>
      </div>
      
    </div>
    </>

}
