import React,{useState} from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['Goku']);
  /** 
  const handleAdd=()=> {
    setCategories([...categories,'Big Bang Theory']);
  }
  */
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      {/* <pre>{JSON.stringify(saludo,null,3)}</pre> */}
      <hr />
      {/*<button onClick={handleAdd}>Agregar</button>*/}
      <ol>
        {
          categories.map(category=>(
            <GifGrid key={category} category={category}/>
          ))
        }
      </ol>
    </>
  );
};

export default GifExpertApp;
