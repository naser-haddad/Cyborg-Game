import './SectionHeader.css';

const SectionHeader = (props) => {
  return (
    <div className='section-header container'>
    <h4>{props.children}</h4>
  </div>
  )
}

export default SectionHeader;