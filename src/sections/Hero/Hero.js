import './Hero.css';
import { PrimaryButton } from '../../Components/index';


const Hero = () => {
    return (
        <div className='hero-main container'>
            <div className='hero-text'>
                <h6 className='hero-subtitle'>Welcome To CYBORG</h6>
                <h4 className='hero-title'><em>BROWSE</em> OUR POPULAR GAMES HERE</h4>
                
                <PrimaryButton className='button-hreo' >Browse Now</PrimaryButton> 
            
               
            </div>
        </div>
    )
}



export default Hero;