import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage'
import img from '../assets/images/not-found.svg'

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='not found' srcset='' />
        <h1>OOPs Page Not Found</h1>
        <p>You took a wrong turn</p>
        <Link to='/'>Back to Home</Link>
      </div>
    </Wrapper>
  )
}

export default Error
