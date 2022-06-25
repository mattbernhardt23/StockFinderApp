import {FaDollarSign} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import PropTypes  from  'prop-types'

function Navbar({title}) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutra text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaDollarSign className='inline pr-2 text-3xl' />
          <Link to='/' className='text-lg font-bold ml-4 align-middle'>
            {title}
          </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
              Home
            </Link>
            <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
           
    
  )
}

Navbar.defaultProps = {
  title: 'Company Finder'
}

Navbar.propTypes = {
  title: PropTypes.string,
}

export default Navbar