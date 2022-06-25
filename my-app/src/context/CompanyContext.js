import { createContext, useReducer } from "react";
import companyReducer from "./CompanyReducer";


const CompanyContext = createContext()

export const CompanyProvider=({children}) => {
   const initialState = {
       companies:[],
       company:{},
       loading:false,
   }

   const [state, dispatch] = useReducer(companyReducer, initialState
)

    return (
    <CompanyContext.Provider value={{
        ...state,
        dispatch,
    }}>
        {children}
    </CompanyContext.Provider>
    )
}

export default CompanyContext