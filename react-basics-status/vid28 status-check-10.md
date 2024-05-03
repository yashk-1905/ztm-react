# 28 Monster Rolodex Component state

we are gonna convert our hard coded app now into an app that adds dynamicity to our app or changes the state on button click

````
/*--now we will change our app acc to vid 28 to make it little dynamic on button click--*/
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  // now over here we are gonna use the same method that every class has access to called constructor but react over here has gone deep into it to do the local state shit well state is local cause only this component is aware of this state variable 
   //whenever this app is built listen you one piece of shit this constructor is gonna run first no matter what dumb ass thoughts you have up in your head

  constructor(){
    //well constructor shit is understandable but who the damn bluddy son of a dog moron has put in a super here??
    //well super ensures that if any parent class is there(like Component in this case) then that class's constructor are gonna run first  so just put it you dumbass and if you have so much of an itch go look for it
    // goddamn it i've an itch and i am gonna look for it 
    /**
     * super basically tells that first priority is of parent and can be used in two ways 
     * 1) super(...args) --> in here we can pass the arguments to the parameter of the parent class' constructor
     * 2) super.func() we can directly use a function of the parent class 
     */
    /**
     * what's this theory give an example you bald
     */
    /**
     * i've hair and here's the example
     * 
     class Rectangle {
      constructor(height, width) {
        this.name = "Rectangle";
        this.height = height;
        this.width = width;
      }
      sayName() {
        console.log(`Hi, I am a ${this.name}.`);
      }
      get area() {
        return this.height * this.width;
      }
      set area(value) {
        this._area = value;
      }
    }

    class Square extends Rectangle {
      constructor(length) {
        // Here, it calls the parent class's constructor with lengths
        // provided for the Rectangle's width and height  ==> super(...args)
        super(length, length);

        // Note: In derived classes, super() must be called before you  ---->> knock knock
        // can use 'this'. Moving this to the top causes a ReferenceError. --->> surprise mf
        this.name = "Square";
      }
    }
     */

    /**
     * what about the second one have you forgotten moron?
     */
    /**
     * here you sucker
     * 
     * super with static methods 
     * 
     * class Rectangle {
        static logNbSides() {
          return "I have 4 sides";
        }
      }

      class Square extends Rectangle {
        static logDescription() {
          return `${super.logNbSides()} which are all equal`;  --->>super.function()
        }
      }
      Square.logDescription(); 
      
      o/p: 'I have 4 sides which are all equal'
     */

      /**
       * ok that's it?
       */

    /**
     * no no you wait mf
     * 
     * class Base {
        static baseStaticField = 90;
        baseMethod() {
          return 10;
        }
      }

      class Extended extends Base {
        extendedField = super.baseMethod(); // 10
        static extendedStaticField = super.baseStaticField; // 90

        ------->>look over here we have used an static instace(variable) extendedStatic... to access the instance of the super
        ------->>because we can't use that directly like below
      }

      >>>>>>>>>>>>>>>>>>>WRONG<<<<<<<<<<<<
      class Base {
        baseField = 10;
      }

      class Extended extends Base {
        extendedField = super.baseField; // undefined
      }
     */
    super()
      //this state is what react is looking for within the class constructor 
      // now state is remember always a js object in which we need to do give a key-value pair
    this.state = {
      name: 'Rashmika',
      //now you can directly use below this.state.name hon instead of the below Hi yash hardcoded
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {/* Hi Yash */}
            Hi {this.state.name}
            {/* now whenever this variable is gonna change then rerendering will occur */}
            {/* but how am i able to use it over here out of constructor??
            
            In JavaScript, when you declare a property within a class constructor using this, it becomes an instance property. This means that any method within the class, including the render() method in the case of React components, can access this property using this.propertyName.

            instance property===> now instance which we are gonna create of the class or the objects of the class are gonna have the initial state as set to that this.state ok!!!
            ??? 
            */}
          </p>
          {/* <button onClick={()=>this.state.name='Yash'}> 
          this ain't working
          whyyy???
          */}
          <button onClick={()=>console.log(this.state.name)}> {/** this is working */}
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
``````