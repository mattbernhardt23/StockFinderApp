import { useContext} from 'react'
import CompanyItem from './CompanyItem'
import Spinner from '../layout/Spinner'
import CompanyContext from '../../context/CompanyContext'

function CompanyResults() {
    const {companies, loading} = useContext(CompanyContext)

    if(!loading){
  
        return (

    <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8">
        {companies.map((company) => (
            <CompanyItem key={company.id} company={company} />
        ))}
    </div>
  )
} else {
    return <Spinner />
}
} 


export default CompanyResults