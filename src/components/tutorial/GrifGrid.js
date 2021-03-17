import React from 'react'
import axios from 'axios'

const GrifGrid = ({category}) => {

    const getGifs = async () =>{

      axios.get()
        
     /*   
        const resp = await fetch(url
        );
        const data = await resp.json();
        
        console.log(data)*/
       // const url = 'https://api.giphy.com/v1/gifs/search?q=Boku no hero&limit=1&api_key=fFkv2aXdde3iRkDdlgRUp4f47apoMoV0'
        
        
    }
  getGifs();
    return (
        <li>{category}</li>
            
        
    )
}

GrifGrid.propTypes = {

}

export default GrifGrid
