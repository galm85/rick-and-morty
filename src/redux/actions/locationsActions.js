import axios from 'axios';

const url = 'https://rickandmortyapi.com/api/location';

export const fetchAllLocations = ()=> async(dispatch)=>{
    const res = await axios.get(`${url}`);
    dispatch({
        type:'fetchLocations',
        payload:res.data.results
    })

}
