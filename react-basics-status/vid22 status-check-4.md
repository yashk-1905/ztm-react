
# 22 cra reactscripts 2

--well we have seen the start script let's see the others

-- what start does is it directly takes our app and pushes in our localhost:3000, it doesn't has to go through any wifi or internet

# build
-- when we have to deal with internet then we need to send our code in much more optimised way

--npm run build
---it will make a diffferent folder outside of src called build
---well in it we can see within index.html one line code for our whole app

--you can use these commands to serve the build
---npm install -g serve
---serve -s build

# test
-- well test we use later to check our app doing exactly what we intended it to do
---there is also an App.test.js file
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
---over here it's just testing our App

# eject
--well for it we need deeper understanding of how the build works 
>>well there are various browsers and they just understand the basic or older version of js and not the one we write over here in react 

>>>so if we look in the static folder then js folder we will find that their are various chunks of js in simpler forms, 
--well it's with the help of webpack and babel 
--so when the home page is required only that much js will be rendered on the browser that's controlled by webpack

>>>so with eject we can extract out the webpack and babel file responsive for renedering our build on the browser and perform the changes according to the way we want the build to be rendered on the browser

#public
>>manifest.json
--well within public we have manifest.json well it helps us build progressive web apps which is the way we can download our website on our desktop 
>>robot.txt
--well it's related to the SEO tells the google how to rank your website 
