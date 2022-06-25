import Ghost from './assets/Ghost.gif'


function Spinner() {
  return (
    <div className="w-100 mt-20">
        <img
            width={180}
            className="text-center mx-auto" 
            src={Ghost} 
            alt="Loading..." />
    </div>
  )
}

export default Spinner