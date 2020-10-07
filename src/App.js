import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import Info from './components/info.js'
import Picture from './components/picture.js'

function App() {
  const [info, setInfo] = useState([])
  useEffect(() => {
    const getAllData = () => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key\=4gBi5apMtp8xXvdW1mAEJNduRmOuDrhXWdMBfzez')
        .then(res => {
          setInfo(res.data)

        })
        .catch(err => {
          debugger
        })
    }
    getAllData()
  }, [])
  return (
    <div className="App">
      <h1>{info.title}</h1>
      <Picture source={info.url} />
      <Info copyright={info.copyright} date={info.date} explanation={info.explanation} />

    </div>
  );
}

export default App;
