import React, {useState} from 'react'

function Hero() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
        <nav className="fixed w-full h-[10%] py-3 flex text-lg bg-gray-800 z-40 items-center">
        <div className='my-gradient text-4xl font-bold ml-[2%] mt-[0.5%]'> <a href="/">Moviemaven </a></div>
          <div className='block w-full h-full lg:hidden absolute'>
            <button onClick={() => setIsOpen(!isOpen)} 
              className={`flex-col items-center absolute bottom-[25%] right-0 mt-[0.25%] align-middle font-bold text-120% my-gradient border hover:border-blue-200 py-[0.5%] px-[4%] rounded-full mr-[5%]`}> Menu </button>           
          </div>
          
          <div class='container' className={`w-full top-8 lg:top-0 bg-gray-800 mt-48 lg:mt-0 flex-1 relative md:flex md:items-center md:w-auto ${isOpen ? "block flex-col p-2" : "hidden"}`}> 
              <ul id='list1' className='relative text-lg my-gradient font-semibold lg:flex-grow text-center mt-[1%] ml-6 lg:ml-0'>
              <li className='list-none text-sm lg:text-lg lg:inline-block pr-8'>About Us</li>
              <li className='list-none text-sm lg:text-lg lg:inline-block pr-8'>Help</li>
              <li className='list-none text-sm lg:text-lg lg:inline-block pr-8'>Terms and Conditions</li>
              <li className='list-none text-sm lg:text-lg lg:inline-block pr-8'>Privacy Policy</li>
              </ul>   
              <button className='relative ml-10 mt-1 lg:ml-0 lg:relative font-semibold my-gradient hover:border-cyan-300 border-2 py-[0.5%] px-[2%] rounded-full lg:mr-[2.25%] bottom-[15%] right-0'> <a nav-link href="#Search"> Search </a></button>
          </div>      
      </nav>
    <div className='static pt-[30%] lg:pt-[12%] text-center text-slate-300'>
        <div className='text-4xl lg:text-7xl m-4 mt-20'>Welcome to <span className='my-gradient font-semibold'>Moviemaven! </span>  </div>
        <div className='text-2xl lg:text-5xl mt-8'> One Stop Destination for all your Movie Hunting</div> </div>
    <div className='px-4 lg:px-0 text-base lg:text-xl text-center lg:text-left text-pink-400 mt-10 lg:ml-60'> Find out all that you need to know about your favourite movies </div>
    <div className='px-4 lg:px-0 text-base lg:text-xl text-center text-fuchsia-400 mt-6'> From Cast to IMDB Rating, From Duration to Languages </div>
    <div className='px-4 lg:px-0 text-base lg:text-xl text-center lg:text-right text-cyan-200 lg:mr-48 mt-6'>We cover all the information you would have ever wanted to know</div>
    <div className='px-4 lg:px-0 mb-16 flex justify-center items-center'><button className='relative text-2xl text-slate-100 mt-6 lg:mt-24 font-semibold bg-gradient-to-r from-purple-500 to-pink-500  hover:border-cyan-300 hover:text-cyan-300 py-[1%] px-[3%] rounded-full mr-[2.25%] bottom-[15%] right-0'> <a nav-link href="#Search">Start Exploring</a></button></div>
    </div>
    
  )
}
export default Hero