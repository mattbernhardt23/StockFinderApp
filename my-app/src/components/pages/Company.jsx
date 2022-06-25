import { FaCoins, FaDollarSign, FaLandmark, FaPercent } from 'react-icons/fa'
import {useEffect, useContext} from 'react'
import { useParams, Link } from 'react-router-dom'
import { getCompany } from '../../context/CompanyActions'
import CompanyContext from '../../context/CompanyContext'
import Spinner from '../layout/Spinner'


function Company() {
    const {company, loading, dispatch} = useContext(CompanyContext)

    const params = useParams()
    
    useEffect(() => {
        dispatch({type: "SET_LOADING"})
        const getCompanyData = async () => {
          const companyData = await getCompany(params.symbol)
          dispatch({type: 'GET_COMPANY', payload: companyData})
        }
        getCompanyData()
    }, [dispatch, params.symbol])

  const {
    bookValue,
    forwardPE,
    marketCap,
    region,
    regularMarketPrice,
    shortName,
    symbol
  } = company;   

  const internationalNumberFormat = new Intl.NumberFormat('en-US')
  const mCap = internationalNumberFormat.format(marketCap)

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <div className='w-full mx-auto lg:w-10/12'>
        <div className='mb-4'>
          <Link to='/' className='btn btn-ghost'>
            Back To Search
          </Link>
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
          <div className='custom-card-image mb-6 md:mb-0'>
            <div className='rounded-lg shadow-xl card image-full'>
         
             
    
           
            </div>
          </div>

          <div className='col-span-2'>
            <div className='mb-6'>
              <h1 className='text-4xl card-title'>
                {shortName}
              </h1>
              <h2 className='card-title text-3xl mb-0'>{symbol}</h2>
            </div>
          </div>
        </div>

        <div className='w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats'>
          <div className='grid grid-cols-1 md:grid-cols-3'>
            <div className='stat'>
              <div className='stat-figure text-secondary'>
                <FaLandmark className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Market Cap</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                ${mCap}
              </div>
            </div>

            <div className='stat'>
              <div className='stat-figure text-secondary'>
                <FaDollarSign className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Market Price</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                ${regularMarketPrice}
              </div>
            </div>

            <div className='stat'>
              <div className='stat-figure text-secondary'>
                <FaPercent className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Price-to-Earnings Ratio</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                {forwardPE}
              </div>
            </div>

            <div className='stat'>
              <div className='stat-figure text-secondary'>
                <FaCoins className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Book Value</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                ${bookValue} (Billions)
              </div>
              <div className='stat-title pr-5 mt-5'>Region</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                {region}
              </div>
              </div>
          </div>
        </div>


      </div>
    </>



  )
}

export default Company