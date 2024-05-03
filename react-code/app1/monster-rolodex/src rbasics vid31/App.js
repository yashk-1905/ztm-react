import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
              //     name:{firstName:'Yash', lastName:'Kothari'}, 
              //     work: 'actor',
              //   }
              // )
              // console.log(this.state);
              // click 1 >>>DOM updated but>>> o/p on console: {name: {firstName:'Rashmika',lastName:'Mandhana'}, work: 'actress'
              // click 2 >>>DOM same and>>> o/p on console: {name: {firstName:'Yash', lastName:'Kothari'}, work: 'actor'}
              /**
               * alright so let's talk about that first but
               * 
               * so if u open ur fucking eyes 
               * u'll see that setState is a callback function so
               * my dear it is gonna run asynchronously and will return a promise that's gonna take time 
               * 
               * and till then log statement will run first and that's why in the first click we get the fist state 
               * 
               * but in click2 new state has arrived so it was updated state
               */

              //fir keh raha hun upar vala commented code majak ke liye nahi likha hai jaruri hai vo usko padna samjhe?
              /**
               * ab jaise tumhe js me chull machi thi idhar to definitely machegi hi ki mujhe pehle state update kar do uske baad update kar dena 
               * to kya karna hai
               * haan beti ke tumhe ek function lagana hoga async vala 
               */

              // this.setState(
              //   async () => {
              //     let data = await {
              //       name:{firstName:'Yash', lastName:'Kothari'}, 
              //       work: 'actor',
              //     }
              //     return data;
              //     console.log(data);
              //   }
              // )

              // are bete setState me async await aise nahi na kaam karta tumko to uske liye karna hoga ek alag tarika use
              /**
               * 
              this.setState(
                ..callback function(...async)
                (state, props) => {  //isme na bhaiya state or props bhi aa sakte hain ab tumko state agar uski previous value ke basis par hi update karana ho to ya kuch or props ka use karna ho to 
                  
                  are vahi setState vali chij iss se normally return karani hai
                },
                ...await
                ()=>{
                  after the above function has run then only it will 
                  kind of await
                  as it's waiting for the above callback function to complete it's task first
                }
              )
               */
              this.setState(
                // (state,props) => {  //over here they are not needed so not used   
                () => { 
                  return {
                    name:{firstName:'Yash', lastName:'Kothari'}, 
                    work: 'actor',
                  }
                },
                ()=>{
                  // console.log(state);  abe beti ke abhi tak samajh naa aayi tereko? chaman state kiska?? tere pichwade ka hain? abe iss class ka iske constructor me hai na vo to kon lagayega this??
                  console.log(this.state);
                }
              )
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