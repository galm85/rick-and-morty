import React,{useState} from 'react';
import {Switch,Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';

//components
import Topbar from './components/topbar';
import SideNav from './components/sideNav';
import Home from './components/home';
import Characters from './components/characters';
import SingleCharacter from './components/singleCharacter';
import Locations from './components/locations';

function App() {

  const [show,setShow] = useState(false);

    const handleShow = ()=>{
        if(show){
            setShow(false);
        }else{
            setShow(true);
        }
    }

  return (
    <Provider store={store}>
        <React.Fragment>
            <Topbar handleShow={handleShow}></Topbar>
            <SideNav show={show} handleShow={handleShow}></SideNav>
            <main>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/characters" component={Characters}/>
                <Route exact path="/locations" component={Locations}/>
                <Route path="/characters/:id" component={SingleCharacter}/>
              </Switch>
            </main>
            
        </React.Fragment>
    </Provider>
  
  );
}

export default App;
