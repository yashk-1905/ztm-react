21 cra and reactScripts

cra
--well it knows what the minimum number of modules we are gonna be needing in order to run our applicaton along with some additional packages 

start
-- react-scripts within package.json makes the execution of our app easier like through start script we can do "npm start"
-- what start does is it directly takes our app and pushes in our localhost:3000, it doesn't has to go through any wifi or internet 
///////////////////////////
src
>>>index.js
--import react ==> engine that controls how the application gets build
--import react dom ==> collection of different tools that help us build the webpage, like it tells the react engine that it should be directed towards web 
>>> well their are others too like react native that directs the engine towards mobile apps and so on
////////////////////////////
rendering 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
--here strict mode ensures that all the features that are deprecated in the new version of react are not used within the app
-- App is our whole of react application
);

--well where is this root??
--within index.html
////////////////////////////
where is index.html??
--well it is in public folder 
--index.html
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>

--within body their is and empty div by the id of root over here we are going to render our app