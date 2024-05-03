import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     //let's say we want to show three monsters in our app
  //     monster1 : {
  //       name: 'Katy' 
  //     },
  //     monster2 : {
  //       name: 'Karen' 
  //     },
  //     monster3 : {
  //       name: 'Santa' 
  //     }
  //   }
  // }
  // render(){
    // return ( 
      //   <h1>{this.state.monster1.name}</h1>
      //   <h1>{this.state.monster2.name}</h1>
      //   <h1>{this.state.monster3.name}</h1>
      // )
      
    // let x = Object.entries(this.state);
    // // chalo map se karte hain
    // return (
    //   <div className="App">
    //     {console.log(x)}
    //      {/* o/p: [Array(2), Array(2), Array(2)]  ==> [[monster1, {name: 'katy'}],[monster2, {name: 'karen'}],[monster3, {name: 'Santa'}]] */}
    //     {
    //       x.map((item)=>{
    //         return <h4>{item.name}</h4>
    //       })
    //     }
    //   </div>
    // );
    /**
     * bhaiya map tumhara aise nahi kaam karega tumko uske liye apne state ka hi struncture badalna hoga 
     *///-------------------------------
  // }                                 ||
  // }                               \ || /
  //                                  \  /
  //                                   \/

  constructor(){
    super();
    this.state = {
      monsters: [
        {
          name: 'Katy'
        },
        {
          name: 'Karen'
        },
        {
          name: 'Santa'
        },
        {
          name: 'Zumba'
        }
      ]
    }
  }

  render(){
    return(
      <div className='App'>
        {
          this.state.monsters.map(((item)=>{
            //<h1>{item.name}</h1>  are return to karana pdega na beti ke
            return <h1>{item.name}</h1>
          }))
        }
      </div>
    )
  }
} 


/**
 * well state shit can be array too it doesn't have to be an object but it will be better to make it an object
 * 
  class App extends Component {
    constructor(){
      super();
      this.state = [
          {
            name: 'Katy'
          },
          {
            name: 'Karen'
          },
          {
            name: 'Santa'
          },
          {
            name: 'Zumba'
          }
      ]
    }

    render(){
      return(
        <div className='App'>
          {
            this.state.map(((item)=>{
              //<h1>{item.name}</h1>  are return to karana pdega na beti ke
              return <h1>{item.name}</h1>
            }))
          }
        </div>
      )
  }
} 
 */
export default App;