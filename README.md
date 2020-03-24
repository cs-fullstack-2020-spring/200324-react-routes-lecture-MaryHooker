# 20-03-24 React Routes Lecture

Set Up
- Create a new react app called `lecture-app`
- Create a class based component called `AppContainer` with the text `React Routes Lecture`
- Reference the `AppContainer` component in App.js
- Create a class based component called `FilmList`
- Display the name and description of Studio Ghibli films from this api : https://ghibliapi.herokuapp.com/films 
- Reference the `FilmList` component in the `AppContainer` component
- Create a class based component called `DrinkList`
- Display the name and instructions of drinks from this api : https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a
- Reference the `DrinkList` component in the `AppContainer` component

Using Routes
- Install react-router-dom using this command in the terminal INSIDE your react app : `npm install react-router-dom`
- Import BrowserRouter as Router, Link and Route from react-router-dom into your `AppContainer` component
- Create a link for the `AppContainer` in the `AppContainer` component
- Remove the `FilmList` and `DrinkList` components from the `AppContainer` component
- Create a link and route for the `FilmList` component in the `AppContainer` component
- Create a link and route for the `DrinkList` component in the `AppContainer` component

Route Syntax
````JSX
<Router>
    <Link to="/">Home</Link> 
    <Link to="/url-path-one">Link Text</Link>
    <Route path="/url-path-one"><ComponentName/></Route>
</Router>
````