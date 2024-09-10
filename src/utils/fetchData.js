export const exerciseOptions = {
   
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
    

      
};


export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1740b22492msh00815e8bb0e4c29p163740jsn6bad21c56600',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};



export const fetchData = async (url , options) =>{
    const response =await fetch(url , options);
    const data = await response.json();

    return data;
}