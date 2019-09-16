import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import Movie from "./Movies/Movie";
import MovieList from "./Movies/MovieList";
import { Route } from 'react-router-dom';
import { BrowserRouter as Link } from "react-router-dom";

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div className = "Routes">
      <SavedList list={savedList} />
      <Route exact path = "/" component={MovieList}/>
      <Route path = "/movies/id" component={Movie}/>
      <Link exact path to = "/">{MovieList}</Link>
      <Link exact path to = "/movies/id">{Movie}</Link>
      //Not sure on these two, but notes for tomorrow ---> home should include all of the movies, but thats it 

    </div>
 
  );
};

export default App;
