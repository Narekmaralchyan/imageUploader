import './style.css'
import Card from '../Card';

function CardList ({data ,onCheckChange}){
    
    return(
        <div className='cardList'>
            {data.map(image =>{
                return <Card 
                    key={image.id} 
                    selected={image.selected} 
                    onCheckChange={onCheckChange} 
                    id={image.id} 
                    src={image.src}/>
            })}
        </div>
    )

}

export default CardList;