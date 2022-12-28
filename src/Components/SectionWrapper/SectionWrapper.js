import './SectionWrapper.css';

const SectionWrapper = (props) => {
  return (
    <div className='section-wrapper container'>
{props.children}
    </div>
  )
}

export default SectionWrapper;