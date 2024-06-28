import comingSoonImage from '../assets/coming-soon.jpeg'
import './ComingSoon.css'

const ComingSoonPage = () => {
  return (
    <>
    <div className="coming-soon-container">
        <img 
        className='coming-soon-image'
        src={comingSoonImage}></img>
    </div>
    </>
  )
}

export default ComingSoonPage