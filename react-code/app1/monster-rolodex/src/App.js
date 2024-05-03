import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [
        {
          name: 'Katy',
          id: '12jkjh34'
        },
        {
          name: 'Karen',
          id: '34wer334we'
        },
        {
          name: 'Santa',
          id: '234aqw'
        },
        {
          name: 'Zumba',
          id: '1234qwe678'
        }
      ]
    }
  }

  render(){
    return(
      <div className='App'>
        {
          this.state.monsters.map(((item)=>{
            // return <h1>{item.name}</h1>
            /**
             * abhi ye warning aa rahi iska kya karna hai??
             * Each child in a list should have a unique "key" prop.
             * 
             * 
             * to bhaiya iske liye har ke element jo list me hai map se hi list nikal rahe hain ye samajh jana
             * chahiye to isme ek key lagayenge id ki jo ki unique hogi or dikhegi nahi vo to bas react ko 
             * particular list item me change hua to puri list ke bajaye sirf uss item ko render karne me 
             * madad karegi 
            */
            return  <div key={item.id}>
              <h1>{item.name}</h1>
            </div>
          }))
        }
      </div>
    )
  }
} 

export default App;