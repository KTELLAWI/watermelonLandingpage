const LangluageSelector = () =>{

return(
    
    <div className="flex flex-row justify-center  select-none">
        <div className="flex flex-row items-center right-1 ">
            <a href="/en">
            <button className="p-2 flex flex-row items-center   text-sm font-medium text-white hover:bg-primarTwo focus:bg-primarTwo rounded-lg focus:outline-none"
                        >
                            <span className="text-md">En</span>
                            {/* <span className="ml-1"> <img src="https://img.icons8.com/?size=512&id=t3NE3BsOAQwq&format=png" className="w-5 h-5" /></span> */}
                        </button>
                        </a>
                      <div className="w-[1px] h-3 bg-white"></div>
                      <a href="/">
            <button className="p-2 flex flex-row items-center   text-sm font-medium text-white hover:bg-primarTwo focus:bg-primarTwo rounded-lg focus:outline-none "
                        >
                            <span className="text-md">Ar</span>
                             {/* <span className="ml-1"> <img src="https://img.icons8.com/?size=512&id=7PhX5XSLeDb9&format=png" className="w-5 h-5" /></span> */}
                        </button>
                        </a>
        </div>
    
    </div>  
);

}

export  default LangluageSelector;