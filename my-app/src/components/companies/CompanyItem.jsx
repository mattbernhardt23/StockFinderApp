import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {FaChartLine} from 'react-icons/fa'

function CompanyItem({ company }) {
  return (
    <div className="card shadow-md compact side bg-accent">
      <div className="grid grid-cols-[1fr_4fr_.5fr] flex-row items-center space-x-4 card-body text-info">
        <div className="symbol">
            <h4>{company.symbol}</h4>
        </div>
        <div className="name">
            {company.name}
        </div>
        <div className="">
              <Link to={`/company/${company.symbol}`}>
                <FaChartLine />
              </Link>
        </div>
      </div>
    </div>
  )
}


CompanyItem.propTypes = {
  company: PropTypes.object.isRequired
}

export default CompanyItem