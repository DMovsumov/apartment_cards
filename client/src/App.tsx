import React, {useEffect} from 'react';
import './App.css';
import {useTypedSelector} from "./store/hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {getData} from "./store/actions/app";
import FlatCard from "./components/FlatCard";

function App() {
  const dispatch = useDispatch();
  const { flats } = useTypedSelector(({app}) => app)

  useEffect(() => {
    dispatch(getData())
  }, [])

  return (
    <div className="App">
        <div className="FlatList">
            {flats.map((flat, index) => <FlatCard key={flat.attributes.title + index} {...flat} />)}
        </div>
    </div>
  );
}

export default App;
