import {v4 as uuidv4} from 'uuid'

const CompanyToken = "Ci86uyauo33gbA6tpGXAO22oUrVp4DKk6IUMnE85"      
const SearchUrl = "https://yfapi.net/v6/finance/autocomplete?region=US&lang=en&"
const CompanyUrl = "https://yfapi.net/v6/finance/quote?region=US&lang=en&"

export const searchCompanies = async (text) => {
    const params = new URLSearchParams({
        query: text,
    })

    const response = await fetch(`${SearchUrl}${params}`, {
        headers: {
            'X-API-KEY': `${CompanyToken}`,
        }
    })

    const data = await response.json()
    const sortedData = []

    data.ResultSet.Result.forEach((item) => {
        sortedData.push(item)
    })

    sortedData.forEach((item) => {
        item.id = uuidv4()
    })

   return sortedData
}

export const getCompany = async (company) => {
    
    const params = new URLSearchParams({
        symbols: company,
    })
    const response = await fetch(`${CompanyUrl}${params}`, {
        headers: {
            'X-API-KEY': `${CompanyToken}`,
        }
    })
    const data = await response.json()

    const result = data.quoteResponse.result[0]

   return result 
}