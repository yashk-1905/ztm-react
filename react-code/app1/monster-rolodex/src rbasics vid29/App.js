/*--now we will change our app acc to vid 28 to make it little dynamic on button click--*/
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      name: 'Rashmika',
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name}
          </p>
          <button onClick={
            // () => {
            //   this.state.name = 'Yash'; //bitch ass doing drama 
            //   console.log(this.state); //working ==> o/p: {name: 'Yash'}
            //   console.log(this.state.name); //working ==> o/p: Yash
            // }

            /**
             * dekho bhai ab tumhari phaadne vala concept aa chuka hai
             * 
             * to suno bade bhai mere baat aisi hai ki object ka copy banao to kya hoga??
             * dusra copy object bhi same hi reference ko point karega to ab agar tum obj1===obj2 bhi karaoge to 'true' hi aayega 
             * 
             * ab dekho react hai maa ka cho thik to vo kehta ki nahi nahi nahi reference hi jab tak nahi badlega(yaani naya hi object purane vale ka value lekar banana padega) tab tak mai nahi karunga render hahaha 
             * 
             * to maane technically react utha raha hai object reference yani memory se ab tumne idhar dusra object banaya to bhi reference to same hi raha na bhale hi value change hui reference to nahi na badla to react ko to ye laga hi nahi ki bhaisaab change hua bhi hai to vo to bhala kaise karega re-render
             * 
             * 
             * const obj1 = {name:'Rashmika'}
             * const obj2 = obj1
             * obj2===obj1 >>> o/p:'true'
             * obj1.name = 'Yash'  
             * obj1 >>> o/p:{name: 'Yash'}
             * obj2 >>> o/p:{name: 'Yash'}
             * 
             * ab dekho sala value to obj1 ka hi lenge par reference badal denge 
             * const obj3 = Object.assign({},obj1)
             * 
             * obj3 >>> o/p: {name:'Yash'}
             * obj1 === obj3 >>> o/p:false
             * 
             * thik aise hi ab setState karega vo value same uthayega reference badal dega fir bkl value bhi badal dega lol
             * 
             * setState is actually updating state to altogether different object haha
             */
            ()=>{
              this.setState(
                /**
                 * well there are many ways to do it but the most basic one is that 
                 * you give this setState an object that you want to shallow merge with 
                 * the object you have defined in your this.state
                 */
                {name:'Yash'}
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