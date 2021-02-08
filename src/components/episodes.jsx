import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchAllEpisodes} from '../redux/actions/episodesActions';
import moment from 'moment';
import PageHeader from './pageHeader';
const Episodes = (props) => {

    useEffect(()=>{
        fetchAllEpisodes();
    })


    if(props.episodes.length===0){
        return <div>Loading....</div>
    }
    return ( 
       
        <div>
            <PageHeader title='Locations'/>
            <div className="locations-container">
                {props.episodes.map(episode=>(
                        <div key={episode.id} className='locations-info'>
                            <h6>{episode.name}</h6>
                            <p>episode: {episode.episode}</p>
                            <p>Aired: {episode.air_date}</p>
                        </div>
                    
                ))}
            </div>
        </div>
     );
}
 
const mapStateToProps = state =>({
    episodes:state.episodes.episodes
})
export default connect(mapStateToProps,fetchAllEpisodes)(Episodes);