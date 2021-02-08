import axios from 'axios';

const url = 'https://rickandmortyapi.com/api/episode';

export const fetchAllEpisodes = ()=> async(dispatch)=>{
    
    const res = await axios.get(`${url}`);
    dispatch({
        type:'fetchEpisodes',
        payload:res.data.results
    })

}


