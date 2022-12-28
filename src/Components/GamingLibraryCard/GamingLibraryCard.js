import './GamingLibraryCard.css';
import {SecondaryButton} from '../Buttons/Buttons';
const GamingLibraryCard = (props) => {
  return (
    <div className='gaming-library-card '>
      <ul>
        <li><img className='gaming-library-images' src={props.image} alt=''  /></li>
        <li><h4>{props.title}</h4><span className='span-card'>{props.category}</span></li>
        <li><h4>Date Added</h4><span className='span-card'>{props.date_added}</span></li>
        <li><h4>Hours Played</h4><span className='span-card'>{props.hours_played}</span></li>
        <li><h4>Currently</h4><span className='span-card'>{props.download}</span></li>
        <div>

          
          <SecondaryButton>Download</SecondaryButton>
          

        </div>
      </ul>
    </div>
  )
}

export default GamingLibraryCard;