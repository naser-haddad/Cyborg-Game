import './Home.css';
import { GamingLibrary, Hero, MostPopular} from '../../sections/index';
const Home = () => {
  return (
    <>
    <h1 className='title-home-page'>HOME PAGE</h1>
                <Hero/>
        <MostPopular/>
        <GamingLibrary/>
        
    </>
  )
}

export default Home