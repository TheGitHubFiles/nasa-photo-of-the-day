import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import Info from './components/info.js'
import Picture from './components/picture.js'
import styled from 'styled-components'

const StyledApp = styled.div`
display:flex;
flex-direction:column;
margin:auto;
align-self:center;
align-items:center;
max-width: 1024px;
h1{
  font-size:6rem; 
  text-decoration: underline;;
}
@media ${pr => pr.theme.breakpoints.tablet}{
h1{
  order:1;
  
}
}  
`


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
    <StyledApp>
      <h1>{info.title}</h1>
      <Picture source={info.url} />
      <Info copyright={info.copyright} date={info.date} explanation={info.explanation} />

    </StyledApp>
  );
}

export default App;
