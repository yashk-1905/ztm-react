# 27 Monster Rolodex class components

## look it's important to understand the difference between rendering and re-rendering

jsx has made it easier to understand while writing our js code that how the look is gonna be in our UI

# now

``````
<!-- we are gonna convert our functional app component into a class component after we have imported  -->

import {Component} from 'react';

<!-- our app class just extending the component -->

class App extends Component {
    
    <!-- over here it's better that at least telling us what to render in class component -->

    render(){
        return(
            <h1> hello </h1>
        )
    }
}
``````