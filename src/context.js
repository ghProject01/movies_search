import React ,{createContext, useContext,useEffect,useState} from "react";

export const API_URL=`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

// creating a context collection of data that can pass to a child component without prop drilling
const AppContext=createContext();


// the data provier, through this the data can be pass to a children component  {children} as argument 

const  AppProvider= ({children})=>{

  const [isLoading ,setIsLoading]=useState(true)
  const [movie,setMovie]=useState([])
  const [isError,setIsError]=useState({show:"false",msg:''})
  const [query,setQuery]=useState("avatar")

    const getMovies= async (url)=>{

      setIsLoading(true);
      try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        if(data.Response ==="True"){
          setIsLoading(false);
          setIsError(
            {show:false,
             msg:"",
            });
          setMovie(data.Search);
        }else{
          setIsError(
            {show:true ,
             msg:data.Error
            });
        }
      }catch (error) {
          console.log(error)
      }
    };
    
  // debouncing is removed by setTimeout to fix more responce load use clearTimeout as a return in use effect 
  useEffect(()=>{
    let timeOut=setTimeout(()=>{getMovies(`${API_URL}&s=${query}`)},900)

    return()=>clearTimeout(timeOut);

  },[query])


    return(
      // the "AppContext.Provider" must use, so the data can pass to any children component ,passing a states as value by settinga intial data in "states" 
        <>
        <AppContext.Provider value={{isError , isLoading, movie, query,setQuery}}>
         {children}
        </AppContext.Provider>
        </>
    )
}

// creating one more function the can provide globelly to means data can be provided to any component 
const GlobalContext=()=>{
    return useContext(AppContext);
}

export {AppContext,AppProvider,GlobalContext};

