import React from 'react'
import './CardInfo.css'

interface ICardInfoProps{
  title: string,
  genre: string,
  rating: 1|2|3|4|5,
  productionYear: number 
}
function CardInfo(props: ICardInfoProps) {

  const {title,genre,rating,productionYear} = props;
 
    let starArray = [];
  for(let i=0; i<5;i++){
    if(i<rating){
      starArray[i] =true;
      
    }else{
      starArray[i] =false;
    }
   
  }
  return (
    <div className='col' style={{backgroundColor: 'transparent', borderBottomLeftRadius: '23px', borderBottomRightRadius: '23px', color:'white'}}>
      <div className="row">
      <p className='card-text-title' >{title}</p>
      </div>
      <div className="row">
      <div className='card-text-title rating-star'>{
      starArray.map((data)=>{
        return (data ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>)


      })
        }</div>
      </div>
      <div className="row">
      <p className='card-text'>{productionYear}</p>
      <p className='card-text'>{genre}</p>
      </div>
    </div>
    
    /*<div className='row' style={{backgroundColor: 'transparent', borderBottomLeftRadius: '23px', borderBottomRightRadius: '23px', color:'white'}}>
      <div className="col-5 ">
      <p className='card-text-title' >{title}</p>
      <p className='card-text'>{genre}</p>
      </div>
      <div className="col-7 pe-0">
 
      <div className='card-text-title rating-star'>{
      starArray.map((data)=>{
        return (data ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>)


      })
        }</div>
     <p className='card-text'>{productionYear}</p>
      </div>

    </div>*/
  )
}

export default CardInfo