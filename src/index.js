import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'

class App extends React.Component {

  //very first function that is called when instance of class is created
  //can initalize state
//  constructor(props) {
  //  super(props);
    //state = object
    //this is the only time we do direct assignment
    //to this.state
state = { lat: null, errorMessage: ''};

  //gets called one time when component first shows up/content visible on screen
  //good place to do data-loading
  componentDidMount() {

    window.navigator.geolocation.getCurrentPosition(
      //success callback
      position =>  {
        //we called set state
        //this.setState({ lat: position.coords.latitude });
        //return ()
        //<SeasonDisplay lat: this.state.lat />
      },
      //failure callback
      err => {
        this.setState({errorMessage: err.message});
      }
    );
  }

  //component did update, automatically anytime component updates
  componentDidUpdate() {

  }

//some kind of cleanup
  componentWillUnmount()  {

  };


  //required for every react component we create
  //Ract says we have to define render!
  //don't initialize work in the render because it gets called aot
  render() {
    // return (
    //   <div>
    //   Latitude: {this.state.lat}<br/>
    //   Error: {this.state.errorMessage}
    //   </div>
    // );
    if (this.state.errorMessage && !this.state.lat) {
      return (<div>Error: {this.state.errorMessage}</div>);
    }
    else if (!this.state.errorMessage && this.state.lat) {
        return (<div>Latitude: {this.state.lat}</div>);
      }
  else { return <div><Spinner /></div>}
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
