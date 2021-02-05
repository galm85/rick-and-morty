import axios from 'axios';

const url = 'https://rickandmortyapi.com/api/character';

export const fetchAllCharacters = ()=> async(dispatch)=>{
    const res = await axios.get(`${url}`);
    dispatch({
        type:'fetchCharacters',
        payload:res.data.results
    })

}