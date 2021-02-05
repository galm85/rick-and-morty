import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchAllCharacters} from '../redux/actions/charactersActions';


const SingleCharacter = (props) => {

    const id = props.match.params.id
    const char = props.characters[id-1];
    
    if(props.characters.length===0){
        fetchAllCharacters()
        const id = props.match.params.id
        const char = props.characters[id-1];
        return <div>Loading...</div>
    }

    return ( 
        <div className="char-page">
            <div className="char-image">
                <img  src={char.image} alt=""/>
            </div>
            
            <div className="single-char-info">
                <h2>{char.name}</h2>
                <p>Species: {char.species}</p>
                <p>Gender: {char.gender}</p>
                <p>Origin: {char.origin.name}</p>
                <p>Location: {char.location.name}</p>

                <button onClick={props.history.goBack}>Back</button>


            </div>

        </div>
        
     );
}
 const mapStateToProps = state =>({characters:state.characters.characters})
export default connect(mapStateToProps,fetchAllCharacters)(SingleCharacter);