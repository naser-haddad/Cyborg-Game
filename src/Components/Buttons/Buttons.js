import './Buttons.css';
import {Link} from 'react-router-dom';
import {FaDownload} from 'react-icons/fa';
const PrimaryButton = (props) => {
  return (
    <div className='button primary-button'>
      <Link to="/browse">{props.children}</Link>
    </div>
  )
}

const SecondaryButton = (props) => {
  return (
    <div className='button secondary-button'>
    <Link to='/'>{props.children} <FaDownload className='FaDownload-icon'/></Link>
  </div>
  )
}

export default PrimaryButton;
export {SecondaryButton};