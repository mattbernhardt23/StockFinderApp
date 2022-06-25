import CompanyResults from "../companies/CompanyResults"
import CompanySearch from "../companies/CompanySearch"

function Home() {
  return (
    <div>
      <CompanySearch />
      <CompanyResults />
    </div>
  )
}

export default Home