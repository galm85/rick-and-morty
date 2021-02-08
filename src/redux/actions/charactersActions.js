import axios from 'axios';

const url = 'https://rickandmortyapi.com/api/character';

export const fetchAllCharacters = ()=> async(dispatch)=>{
    
    const res = await axios.get(`${url}`);
    dispatch({
        type:'fetchCharacters',
        payload:res.data.results
    })

}

export const nextPage = (page) => async (dispatch)=>{
    
    const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
    console.log(res.data);
    dispatch({
        type:'nextPage',
        payload:res.data.results
    })
}

