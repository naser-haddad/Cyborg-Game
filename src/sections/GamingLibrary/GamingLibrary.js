import './GamingLibrary.css';
import {SectionHeader, SectionWrapper, GamingLibraryCard} from '../../Components/index';
import GamingLibraryData from '../../Database/GamingLibraryData';
const GamingLibrary = () => {

  const cards = GamingLibraryData.map(card => {
    return <GamingLibraryCard key={card.id} image={card.image} title={card.title} category={card.category} date_added={card.date_added} download={card.downloaded} hours_played={card.hours_played} />
  });



  return (
            <>
      <SectionWrapper>
        <SectionHeader>Gaming Library</SectionHeader>
        <div className='gaming-library-cards'>
          {cards}
        </div>
      </SectionWrapper>
    </>
  )
}

export default GamingLibrary;