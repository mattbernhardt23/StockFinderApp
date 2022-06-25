import { useState, useContext} from 'react'
import { searchCompanies } from '../../context/CompanyActions'
import CompanyContext from '../../context/CompanyContext'

function CompanySearch() {
    const { companies, dispatch, clearCompanies } = useContext(CompanyContext)
    const [text, setText] = useState('')

    const handleChange = (e) => setText(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(text === '') {
            alert("Please Enter Something", 'error')
        } else {
            dispatch({type:'SET_LOADING'})
            const companies = await searchCompanies(text)
            dispatch({type: 'GET_COMPANIES', payload: companies})
            setText('')
        }
    }

    const handleClick = (e) => {
        clearCompanies()
    }


  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
        <div>
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <div className="relative">
                    <input 
                        type="text" 
                        className="w-full pr-40 bg-gray-200 input input-lg text-black" 
                        placeholder="Search"
                        value={text}
                        onChange={handleChange}
                    />
                    <button
                        type='submit'
                        className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
        </div>
        {companies.length > 0 && (
        <div>
            <button 
                className="btn btn-ghost btn-lg"
                onClick={() => dispatch({type: 'CLEAR_COMPANIES'})}
                >
                Clear
            </button>
        </div>
        )}
    </div>
  )
}

export default CompanySearch