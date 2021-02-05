import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchAllLocations} from '../redux/actions/locationsActions';
import moment from 'moment';
import PageHeader from './pageHeader';
const Locations = (props) => {

    useEffect(()=>{
        fetchAllLocations();
    })


    if(props.locations.length===0){
        return <div>Loading....</div>
    }
    return ( 
       
        <div>
            <PageHeader title='Locations'/>
            <div className="locations-container">
                {props.locations.map(location=>(
                        <div key={location.id} className='locations-info'>
                            <h6>{location.name}</h6>
                            <p>Type: {location.type}</p>
                            <p>Dimension: {location.dimension}</p>
                            <p>Created: {moment(location.created).calendar()}</p>
                        </div>
                    
                ))}
            </div>
        </div>
     );
}
 
const mapStateToProps = state =>({
    locations:state.locations.locations
})
export default connect(mapStateToProps,fetchAllLocations)(Locations);