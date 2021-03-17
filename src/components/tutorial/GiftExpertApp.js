import React ,{useState}from 'react'
import AddCategory from './AddCategory'
import GrifGrid from './GrifGrid';



const GiftExpertApp = () => {

const [categories,setCategories] = useState(['Boku no hero',',ajshdakjshdjh']);




    return (
        <>
            <h2>Prueba de renderizar</h2>
            <AddCategory setCategories= {setCategories}/>
            {
                    categories.map(c=>
                         <GrifGrid key ={c} category={c}/>
                    )  
                    
            } 
            <hr/>
            <ol>
               


                      
                
                
            </ol>
        </>
    )
}



export default GiftExpertApp
