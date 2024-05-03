# 30 Monster Rolodex States and Shallow Merge
``````
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     name: 'Rashmika',
  //     work: 'actress'
  //   }
  // }
  /**
   * what the hell is that shallow merge shit??
   */
  // render(){
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Hi {this.state.name}, I am an {this.state.work}
  //         </p>
  //         <button onClick={
  //           ()=>{
  //             this.setState(
  //               {name:'Yash'}
  //             )
  //             console.log(this.state);
  //             // click 1 >>>DOM updated but>>> o/p: {name: 'Rashmika', work: 'actress'}
  //             // click 2 >>>DOM same and>>> o/p: {name: 'Yash', work: 'actress'}
  //             /**
  //              * we will talk about that first 'but' later 
  //              * rn let's talk bout the click 2 shit 
  //              * 
  //              * so dear what we wrote in setState is just {name: 'Yash'}
  //              * then how the work:'actress' part too came??
  //              * 
  //              * so in shallow merge it only update the keys for which the value has been passed to, anything else it keeps the same way
  //              */
  //           } 
  //         }>
  //           Change Name
  //         </button>
  //       </header>
  //     </div>
  //   );
  // }

  // ok to upar vala commented part bhi pad lena vo billaiya ke byah ke liye nahi rakha hai
  /**
   * kyonki kuch or batana hai isliye usko comment kiya 
   * 
   * with shallow merge react ko ghanta farq nahi padta ki pehle value kya thi 
   * it just matches the keys and update the damn value regardless of how complex the previous value was
   */
  /**
   * to bhaiya ab karte hain practical 
   * 
   * name ko string ki jagah bana denge object
   */
  constructor(){
    super()
    this.state = {
      name: {firstName:'Rashmika',lastName:'Mandhana'},
      work: 'actress'
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}, I am an {this.state.work}
          </p>
          <button onClick={
            ()=>{
              // this.setState(
              //   {
              //     name:'Yash', 
              //     work: 'actor',
              //   }
              // )
              // console.log(this.state);
              // click 1 >>>DOM updated but>>> o/p on console: {name: {firstName:'Rashmika',lastName:'Mandhana'}, work: 'actress'
              // click 2 >>>DOM same and>>> o/p on console: {name: 'Yash', work: 'actress'}
              /**
               * we will talk about that first 'but' later 
               * rn let's talk bout this
               * 
               * o/p both times on the DOM==> Hi , I am an actress
               * ?????????????????WHY????????????????
               * 
               *  well dom has still shown right? has not given error 
               * so that's due to shallow merge as it doesn't care if the name 
               * earlier was an object and now a string it's work is to update so it damn 
               * updates
               * 
               * but if we want no such anomaly 
               * 
               * then we need to update in our setState the same type of values which 
               * we have within the state 
               * 
               */
              this.setState(
                {
                  name:{firstName:'Yash', lastName:'Kothari'}, 
                  work: 'actor',
                }
              )
              console.log(this.state);
            } 
          }>
            Change Name
          </button>
        </header>
      </div>
    );
  }
} 

export default App;
``````