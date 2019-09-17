import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import Movie from "./Movies/Movie";
import MovieList from "./Movies/MovieList";
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div className = "Routes">
      <SavedList list={savedList} />
      <Route exact path = "/" render={()=><MovieList/>}/>
      <Route path = "/movies/:id" render={props=><Movie {...props} movie={SavedList}/>}/>

     

    </div>
 
  );
};

export default App;
