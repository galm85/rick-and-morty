import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchAllCharacters} from '../redux/actions/charactersActions';
import {Link} from 'react-router-dom';
import PageHeader from './pageHeader';


const Characters = (props) => {

    useEffect(()=>{
         fetchAllCharacters();
        
    },[])


    if(props.characters.length===0){
        return <div>Loading...</div>
    }


    return ( 
        <div>
            
            <PageHeader title='Characters'/>
            <div className="characters-container">
                {props.characters.map(char=>(
                    <Link to={`characters/${char.id}`}>
                        <div key={char.id} className='char-info'>
                            <img width="200px" src={char.image} alt={char.name}/>
                            <h6>{char.name}</h6>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
     );
}
 
const mapStateToProps = state =>({characters:state.characters.characters})
export default connect(mapStateToProps,fetchAllCharacters)(Characters);