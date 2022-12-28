// import all the files //
import './MostPopular.css';
import {SectionHeader, SectionWrapper, MostPopularCard} from '../../Components/index';
import MostPopularData from '../../Database/MostPopularData';

const MostPopular = () => {
  
  const cards = MostPopularData.map(card => {
    return <MostPopularCard key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download} />
  });

  return (

    <>
      <SectionWrapper>
        <SectionHeader>most Popular</SectionHeader>
        <div className='most-popular-items'>
          {cards}
        </div>
      </SectionWrapper>
    </>

  )
}


export default MostPopular;