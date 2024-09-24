import './Cards.css'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
const Cards = ({content,image,path}) => {
    const[isClicked,setIsClicked] = useState(false);
    const navigate = useNavigate();

    const handleClick = ()=>{
        setIsClicked(!isClicked);
        navigate(path);
    };

    return (
        <div className={`Cards ${isClicked ? 'active' : ''}`} onClick={handleClick}>
        <img src={image} alt={content} className="CardImage" />
        <p className = "CardsTitle">{content}</p>
      </div>
    );
  };
  
  export default Cards